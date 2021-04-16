# IBM Frontend CO2

This is an example frontend project for the dataset [San Francisco Municipal Greenhouse Gas Inventory](https://data.sfgov.org/Energy-and-Environment/San-Francisco-Municipal-Greenhouse-Gas-Inventory/pxac-sadh). 
It is a single page application build with React to offer access to the filtered data of the dataset.

## Data
The received JSON data is an array of Objects only the following variables are displayed:
- the Department of the department `department`
- the Source Type type `source_type`
- the CO2 emissions `emissions_mtco2e`
All data entries with a CO2 emissions of 0 are removed.

## Features
The input field above the table allows filtering of the departments.
Belowe the table is a page indicator with arrows which allows pagination.

## Live demo

The link for the life demo: [Here](https://ibmfrontendco2.herokuapp.com/)