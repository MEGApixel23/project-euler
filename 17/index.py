def parse(number):
    if number <= 12:
        return parse_plain(number)
    elif number <= 19:
        return ('four' if number % 10 == 4 else parts[number % 10]) + cardinal_suffix
    elif number < 100:
        return parse_decades(number)
    elif number < 1000:
        return parse_hundreds(number)
    elif number == 1000:
        return 'one thousand'

def parse_plain(number):
    return prime_numbers[number]

def parse_decades(number):
    quotient = number // 10
    remainder = number % 10
    main = parts[quotient] + decade_postfix

    return main + ' ' + prime_numbers[remainder] if remainder != 0 else main

def parse_hundreds(number):
    quotient = number // 100
    remainder = number % 100
    main = prime_numbers[quotient] + ' hundred'

    return main if remainder == 0 else main + ' and ' + parse(remainder)

prime_numbers = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve'
}
parts = {
    2: 'twen',
    3: 'thir',
    4: 'for',
    5: 'fif',
    6: 'six',
    7: 'seven',
    8: 'eigh',
    9: 'nine',
}
decade_postfix = 'ty'
cardinal_suffix = 'teen'
digit_parts = {
    100: 'hundred',
    1000: 'thousand'
}