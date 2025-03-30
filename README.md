# InputValidate Library

## Overview

The `clsInputValidate` library provides a collection of utility functions for validating and reading various types of user input, including numbers (integers, floats, doubles), and dates. It is designed to handle common input validation scenarios, such as ensuring a number falls within a specified range, or checking if a date is valid or falls within a specific range.

## Features

- Validate numbers (integer, short, float, double) within a specified range.
- Validate dates within a specified range.
- Functionality for reading and validating user input, retrying until valid input is provided.
- Easy-to-use methods for input error handling, with custom error messages.

## Requirements

- C++11 or later (due to the use of `std::numeric_limits` and other modern C++ features).
- Includes the `String-library` and `Date-library` for handling strings and date operations respectively.

## Installation

To use this library in your project, simply include the following header file:

```cpp
#include "Validator.h"
```

Make sure the `String-library` and `Date-library` are also included in your project.

## Usage

The `clsInputValidate` class provides several static methods for different types of validation and input reading. Below are the available methods:

### Methods

#### 1. `IsNumberBetween(short Number, short From, short To)`
- Checks if a given short number is within the specified range (inclusive).
- **Returns**: `true` if the number is within range, `false` otherwise.

#### 2. `IsNumberBetween(int Number, int From, int To)`
- Checks if a given integer is within the specified range (inclusive).
- **Returns**: `true` if the number is within range, `false` otherwise.

#### 3. `IsNumberBetween(float Number, float From, float To)`
- Checks if a given float number is within the specified range (inclusive).
- **Returns**: `true` if the number is within range, `false` otherwise.

#### 4. `IsNumberBetween(double Number, double From, double To)`
- Checks if a given double number is within the specified range (inclusive).
- **Returns**: `true` if the number is within range, `false` otherwise.

#### 5. `IsDateBetween(clsDate Date, clsDate From, clsDate To)`
- Checks if a given date falls within the specified date range (inclusive).
- **Returns**: `true` if the date is within range, `false` otherwise.

#### 6. `ReadIntNumber(string ErrorMessage)`
- Reads an integer input from the user, retrying until a valid integer is entered.
- **Returns**: A valid integer.
- **ErrorMessage**: The error message to display if the input is invalid.

#### 7. `ReadIntNumberBetween(int From, int To, string ErrorMessage)`
- Reads an integer input from the user, ensuring the number falls within the specified range.
- **Returns**: A valid integer within the range.
- **ErrorMessage**: The error message to display if the input is out of range.

#### 8. `ReadDblNumber(string ErrorMessage)`
- Reads a double input from the user, retrying until a valid double is entered.
- **Returns**: A valid double.
- **ErrorMessage**: The error message to display if the input is invalid.

#### 9. `ReadDblNumberBetween(double From, double To, string ErrorMessage)`
- Reads a double input from the user, ensuring the number falls within the specified range.
- **Returns**: A valid double within the range.
- **ErrorMessage**: The error message to display if the input is out of range.

#### 10. `IsValideDate(clsDate Date)`
- Validates if a given date is valid.
- **Returns**: `true` if the date is valid, `false` otherwise.

## Example Code

```cpp
#include "clsInputValidate.h"
#include <iostream>
using namespace std;

int main()
{
    // Example: Reading an integer between a range
    int age = clsInputValidate::ReadIntNumberBetween(18, 99, "Age must be between 18 and 99, please try again:");

    // Example: Reading a double between a range
    double salary = clsInputValidate::ReadDblNumberBetween(1000.0, 100000.0, "Salary must be between 1000 and 100000, please try again:");

    // Example: Checking if a number is in a range
    if (clsInputValidate::IsNumberBetween(age, 18, 99))
    {
        cout << "Valid age." << endl;
    }

    // Example: Date validation
    clsDate startDate(2022, 1, 1);
    clsDate endDate(2022, 12, 31);
    clsDate userDate(2022, 6, 15);

    if (clsInputValidate::IsDateBetween(userDate, startDate, endDate))
    {
        cout << "Date is within range." << endl;
    }
    else
    {
        cout << "Date is out of range." << endl;
    }

    return 0;
}
```

## Dependencies

- **clsDate**: A class to handle date operations such as date comparison and validation.
- **clsString**: A class for string operations (if needed for other parts of the project).

Ensure you include the necessary dependencies in your project for the library to work properly.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

If you would like to contribute to this project, feel free to fork the repository, make changes, and submit pull requests. Contributions are always welcome!

## Acknowledgements

- The library is designed to simplify the process of user input validation in C++ applications.
- Thanks to the C++ standard library for providing `std::cin`, `std::cout`, and other utilities that make input/output operations easier.
