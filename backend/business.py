def get_data():

    with open("names.txt") as f:
        names=f.read()
        name=names.split('\n')
        return name