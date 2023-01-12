import hashlib

def hasheo_dato(user,password=''):
    string = user + password;
    return hashlib.sha256(string.encode()).hexdigest()
