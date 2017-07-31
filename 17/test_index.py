import unittest
import index

class TestStringMethods(unittest.TestCase):
    def test_parse_plain(self):
        dict = {
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            8: 'eight',
            9: 'nine'
        }
        for number, word in dict.items():
            self.assertEqual(index.parse_plain(number), word)

    def test_parse_from_10_to_20(self):
        dict = {
            11: 'eleven',
            13: 'thirteen',
            14: 'fourteen',
            18: 'eighteen',
            19: 'nineteen'
        }
        for number, word in dict.items():
            self.assertEqual(index.parse(number), word)

    def test_parse_from_21_to_99(self):
        dict = {
            22: 'twenty two',
            97: 'ninety seven',
            66: 'sixty six',
            77: 'seventy seven'
        }
        for number, word in dict.items():
            self.assertEqual(index.parse_decades(number), word)

    def test_parse_from_100_to_999(self):
        dict = {
            100: 'one hundred',
            101: 'one hundred and one',
            201: 'two hundred and one',
            323: 'three hundred and twenty three',
            342: 'three hundred and forty two',
            944: 'nine hundred and forty four',
        }
        for number, word in dict.items():
            self.assertEqual(index.parse_hundreds(number), word)

    def test_symbols(self):
        numbers = range(1, 6)
        sum = 0

        for number in numbers:
            word = index.parse(number).replace(' ', '')
            sum += len(word)

        self.assertEqual(19, sum)

        word = index.parse(115).replace(' ', '')
        sum = len(word)

        self.assertEqual(sum, 20)

        word = index.parse(342).replace(' ', '')
        sum = len(word)

        self.assertEqual(sum, 23)

        numbers = range(1, 1001)
        sum = 0

        for number in numbers:
            word = index.parse(number).replace(' ', '')
            sum += len(word)
        print(sum)



if __name__ == '__main__':
    unittest.main()