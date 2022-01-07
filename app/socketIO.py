from flask_socketio import SocketIO, emit, leave_room, join_room
import os
# create your SocketIO instance
socketio = SocketIO()

if os.environ.get('FLASK_ENV') == 'production':
    origins = [
        'http://actual-app-url.herokuapp.com',
        'https://actual-app-url.herokuapp.com'
    ]
else:
    origins = "*"
# create your SocketIO instance
socketio = SocketIO(cors_allowed_origins=origins)

rooms = [[]]
@socketio.on("setUp")
def send_chat_out():
    num_of_rooms = len(rooms)
    in_last_room = len(rooms[num_of_rooms - 1])
    if (in_last_room == 2):
        rooms.append(['O'])
    elif (in_last_room == 1):
        rooms[num_of_rooms - 1].extend('X')
    else:
        rooms[num_of_rooms - 1].extend('O')
    # print(rooms[-1][-1])
    join_room(num_of_rooms)
    emit('setUpChar', {'char': rooms[-1][-1], 'room': num_of_rooms})

@socketio.on("updateBoard")
def update_board(data):
    turns = {'X': 'O', 'O': 'X'}
    print(turns[data['lastPlayed']])
    emit("updateBoard", {'values': data['values'], 'turn': turns[data['lastPlayed']]}, broadCast=True, include_self=True, room=data['room'])
