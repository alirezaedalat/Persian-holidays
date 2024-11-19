
# Non-Friday Holiday Finder 🗓️

This project is a Node.js script that checks for holidays using the [PHoliday API](https://pholiday.herokuapp.com/) and identifies holidays that **do not fall on a Friday**. The script processes dates starting from January 1, 2019, and continues until December 31, 2020. All non-Friday holidays are collected and displayed at the end of the run.

## Features

- Fetches holiday data from the [PHoliday API](https://pholiday.herokuapp.com/).
- Identifies holidays that are **not Fridays**.
- Automatically iterates through dates, handling month and year transitions.
- Logs each non-Friday holiday to the console as it processes.

## Prerequisites

- **Node.js** installed on your system.
- **Internet connection** to fetch data from the API.

## Installation

1. Clone this repository or download the project files.
2. Navigate to the project folder in your terminal.
3. Install the required dependency:
   ```bash
   npm install request
   ```

## Usage

1. Run the script in your terminal:
   ```bash
   node script.js
   ```
2. Wait for the script to complete processing all the dates. It may take some time as it fetches data for two years.

## How It Works

1. **Date Iteration**: Starts from the provided date (January 1, 2019) and moves day-by-day until December 31, 2020.
2. **API Calls**: Makes an HTTP request to the PHoliday API for each date to check if it’s a holiday.
3. **Filtering**: Checks if the holiday is not a Friday. If so, it adds the holiday to the list.
4. **Output**: Displays the date and holiday message for each non-Friday holiday. Once all dates are processed, it logs the full list of holidays.

## Example Output

```bash
Please wait a moment...
2019-01-01 , It's a non-friday holiday!
2019-01-26 , It's a non-friday holiday!
2020-10-02 , It's a non-friday holiday!
[List of all non-Friday holidays]
```

## Files

- `script.js`: The main script file containing the logic for fetching and processing holiday data.

## Notes

- The script uses the [PHoliday API](https://pholiday.herokuapp.com/) to retrieve holiday data. Ensure the API is operational when running the script.
- The `request` library is used for making HTTP calls. While it's simple, note that it is deprecated, and you may want to replace it with a modern library like `axios` or `node-fetch`.

## Improvements for Future Versions

- **Parameterization**: Allow users to input custom start and end dates.
- **Concurrency**: Speed up the process using asynchronous requests for multiple dates.
- **Error Handling**: Improve handling of API downtime or network issues.
- **Upgrade Dependencies**: Replace `request` with `axios` or similar libraries for better maintainability.

---

Enjoy finding those non-Friday holidays! 😊 If you have any questions or need help, feel free to reach out.
