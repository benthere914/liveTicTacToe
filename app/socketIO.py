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



