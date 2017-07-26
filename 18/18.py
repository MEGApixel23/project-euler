def parse_string(input):
    tree = []
    for raw_row in input.split("\n"):
        row = []
        for number in raw_row.split(" "):
            row.append(int(number))
        tree.append(row)

    return tree

def get_path(tree, prev=None):
    return 0b1 << len(tree) - 1 if prev == None else prev + 1

def get_max_path(tree):
    return get_path(tree) << 1

def get_left(index, row, tree):
    return tree[row + 1][index]

def get_right(index, row, tree):
    return tree[row + 1][index + 1]

tree = parse_string("""3
7 4
2 4 6
8 5 9 3""")
path = get_path(tree)
max_path = get_max_path(tree)
current_index = 0

while path < max_path:
    row = 0
    print(bin(path))
    for i in bin(path)[:2:-1]:
        current_index += int(i)
        number = get_left(current_index, row, tree) if i == '0' else get_right(current_index, row, tree)
        row += 1
        print(number)
    path = get_path(tree, path)