import csv 

movieCount = {}

try:
    f = open("watchlist.csv","r")
    reader = csv.reader(f)

    for row in reader: 
        for movie in row:
            if movie in  movieCount:
                movieCount[movie] += 1
            else:
                movieCount[movie] = 1

    f.close()

    topThreeMovies = sorted(movieCount.items(), key= lambda x : x[1], reverse= True)[:3]

    print("Top three movies with count: ")
    for movie in topThreeMovies:
        print(movie[0],"=",movie[1])


except FileNotFoundError:
    print("File not found")