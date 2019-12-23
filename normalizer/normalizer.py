file_path = '../data/sr/veznici.txt'
processed = []

with open(file_path, encoding='utf8') as f:
    lines = f.readlines()

    for x in lines:
        if x not in processed:
            processed.append(x.lower())

processed.sort()

with open(file_path, 'w', encoding='utf8') as f:
    [f.write(x) for x in processed]