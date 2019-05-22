from flask import Flask, render_template, url_for, request, session, redirect, abort
from flask_pymongo import PyMongo, pymongo
import bcrypt
import json

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'mangastuff'
app.config['MONGO_URI'] = 'mongodb://user:2252010baby@ds159785-a0.mlab.com:59785,ds159785-a1.mlab.com:59785/mangastuff?replicaSet=rs-ds159785'
app.config['SECRET_KEY'] = '0f9dc56d2288afa6e10b8d97577fe25b'


mongo = PyMongo(app)




# home/index route
@app.route('/')
def home():
    #new manga list
    new_manga = list(mongo.db.all_manga_details.find().sort('votes', pymongo.ASCENDING).limit(10))

    #popular manga view
    front_page_manga = list(mongo.db.update_spider.find())
    popular_manga_list = []

    for item in front_page_manga[0]['popular_manga']:
        # popular_manga_list.append(list(mongo.db.all_manga_details.find_one({'id':item})))
        popular_manga_list.append(mongo.db.all_manga_details.find_one({'id':item}))

    #latest manga view
    latest_front_page_manga = list(mongo.db.update_spider.find())
    latest_mange_releases = []
    for item in latest_front_page_manga[0]['latest_mange_releases']:
        latest_mange_releases.append(mongo.db.all_manga_details.find_one({'id':item}))

    latest_manga_releases_chapter_list = []
    for item in latest_front_page_manga[0]['latest_mange_releases']:
        latest_manga_releases_chapter_list.append(mongo.db.manga_chapter_list.find_one({'manga_id':item}))


    #most popular manga view
    most_popular_front_page_manga = list(mongo.db.update_spider.find())
    most_popular_manga = []

    for item in most_popular_front_page_manga[0]['most_popular_manga']:
        most_popular_manga.append(mongo.db.all_manga_details.find_one({'id':item}))

    genres_categories = list(mongo.db.genres_categories.find())
    genres = genres_categories[0]['genres']
    categories = genres_categories[0]['categories']

    total_bookmark = 0
    if session:
        user_name = session['username']
        users = mongo.db.users
        bookmark_id = users.find_one({'name':user_name})


        if 'bookmark' in bookmark_id:
            total_bookmark = len(bookmark_id['bookmark']) - 1

    # with open('test.html', 'w+') as outfile:
    #     json.dump(most_popular_manga, outfile)

    return render_template('index.html', mangas = front_page_manga, popular_manga_list=popular_manga_list, latest_mange_releases=latest_mange_releases, most_popular_manga=most_popular_manga, genres=genres, categories=categories, total_bookmark=total_bookmark, latest_manga_releases_chapter_list=latest_manga_releases_chapter_list, new_manga=new_manga)








# Main manga page with pagintion. Used in all types of manga page
@app.route('/manga/')
def manga():
    items = mongo.db.all_manga_details

    #Getting total manga number
    total_manga = len(list(items.find()))

    #getting total page number
    offset = 25
    page_number = total_manga / offset
    if total_manga % offset == 0:
        total_page_number = int(str(page_number).split('.')[0])
    else:
        total_page_number = int(str(page_number).split('.')[0]) + 1

    #pagination code
    first_prev_page = 0
    second_prev_page = 0
    current_page = 0
    first_next_page = 0
    second_next_page = 0


    if int(request.args['page']) == 1:
        current_page = int(request.args['page'])
        first_prev_page = 0
        second_prev_page = 0
        first_next_page = current_page + 1
        second_next_page = current_page + 2
    elif int(request.args['page']) == 2:
        current_page = int(request.args['page'])
        first_prev_page = 0
        second_prev_page = current_page - 1
        first_next_page = current_page + 1
        second_next_page = current_page + 2
    elif int(request.args['page']) == total_page_number - 1:
        current_page = int(request.args['page'])
        first_prev_page = current_page - 2
        second_prev_page = current_page - 1
        first_next_page = current_page + 1
        second_next_page = 0
    elif int(request.args['page']) == total_page_number:
        current_page = int(request.args['page'])
        first_prev_page = current_page - 2
        second_prev_page = current_page - 1
        first_next_page = 0
        second_next_page = 0
    elif int(request.args['page']) > 3:
        current_page = int(request.args['page'])
        first_prev_page = current_page - 2
        second_prev_page = current_page - 1
        first_next_page = current_page + 1
        second_next_page = current_page + 2
    else:
        first_prev_page = 1
        second_prev_page = 2
        current_page = 3
        first_next_page = 4
        second_next_page = 5
    #pagination code ends here

    page_offset = (current_page-1) * 25
    limit = 25

    starting_manga_id = items.find().sort('_id', pymongo.ASCENDING)
    last_manga_id = starting_manga_id[page_offset]['_id']

    # all_manga = list(items.find().limit(offset))
    all_manga = list(items.find({'_id':{'$gte':last_manga_id}}).sort('_id', pymongo.ASCENDING).limit(limit))


    manga_chapter_list_from_paginated_manga = []
    for item in all_manga:
        manga_chapter_list_from_paginated_manga.append(mongo.db.manga_chapter_list.find_one({'manga_id':item['id']}))



    #popular manga view
    front_page_manga = list(mongo.db.update_spider.find())
    popular_manga_list = []

    for item in front_page_manga[0]['popular_manga']:
        # popular_manga_list.append(list(mongo.db.all_manga_details.find_one({'id':item})))
        popular_manga_list.append(mongo.db.all_manga_details.find_one({'id':item}))



    genres_categories = list(mongo.db.genres_categories.find())
    genres = genres_categories[0]['genres']
    categories = genres_categories[0]['categories']

    total_bookmark = 0
    if session:
        user_name = session['username']
        users = mongo.db.users
        bookmark_id = users.find_one({'name':user_name})


        if 'bookmark' in bookmark_id:
            total_bookmark = len(bookmark_id['bookmark']) - 1


    return render_template('manga.html', all_manga=all_manga, total_manga = total_manga, total_page_number = total_page_number, current_page = current_page, first_prev_page = first_prev_page, second_prev_page = second_prev_page, first_next_page = first_next_page, second_next_page = second_next_page, popular_manga_list=popular_manga_list, genres=genres, categories=categories, total_bookmark=total_bookmark, manga_chapter_list_from_paginated_manga=manga_chapter_list_from_paginated_manga)












if __name__ == '__main__':
    app.run(debug=True)
