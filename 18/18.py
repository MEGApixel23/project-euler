def run(input):
    tree = build_tree(input)
    path = get_path(tree)
    max_path = get_max_path(tree)
    map = {}

    while path < max_path:
        row = 0
        current_index = 0

        path_sum = 0
        for i in bin(path)[:2:-1]:
            number = get_left(current_index, row, tree) if i == '0' else get_right(current_index, row, tree)
            path_sum += number
            row += 1
            current_index += int(i)

        map[path] = tree[0][0] + path_sum
        path = get_path(tree, path)

    return map[max(map, key=map.get)]

def build_tree(input):
    tree = []
    for raw_row in input.split("\n"):
        row = []
        for number in raw_row.strip().split(" "):
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

if __name__ == '__main__':
    input = """3
    7 4
    2 4 6
    8 5 9 3"""
    assert run(input) == 23

    big_input = """75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23"""
    print(run(big_input))