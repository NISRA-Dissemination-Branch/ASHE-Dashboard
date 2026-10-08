import { insertHeader, insertFooter, insertHead, insertNavButtons } from "./utils/page-layout.js";
import { readData } from "./utils/read-data.js";
import { insertValue } from "./utils/insert-value.js";
import { latest_year, updateYearSpans, first_year } from "./utils/update-years.js";
import { config } from "./config/config.js";
import { initCookieConsent } from "./utils/cookies.js";

window.addEventListener("DOMContentLoaded", async () => {

    initCookieConsent();
    await insertHead("Home");
    insertHeader();
    insertNavButtons();
    insertFooter();


    // Insert values into homepage cards below

    // Content for card 1

    const [GHWPLGD_data, GHWPLGD_meta] = await readData("GHWPLGD");
    updateYearSpans(GHWPLGD_data, GHWPLGD_meta);

    const headline_1_raw = GHWPLGD_data
        .filter(row => row["Statistic"] == "Median Wage" && row["Year"] == latest_year && row["Local Government District"] == "Northern Ireland" && row["Pay Rate"] == "Hourly (excluding overtime)" && row["Working Pattern"] == "Full-Time")
        .map(col => col["All Persons"])[0];

    // BuildR display value: 17.76
    const headline_1 = headline_1_raw.toFixed(2);
    insertValue("headline-1-value", headline_1);


    // Content for card 2

    const headline_2_raw = GHWPLGD_data
        .filter(row => row["Statistic"] == "Median Wage" && row["Year"] == latest_year && row["Local Government District"] == "Northern Ireland" && row["Pay Rate"] == "Hourly (excluding overtime)" && row["Working Pattern"] == "Full-Time")
        .map(col => col["Females"])[0];

    // BuildR display value: 17.67
    const headline_2 = headline_2_raw.toFixed(2);
    insertValue("headline-2-value", headline_2);


    // Content for card 3

    const headline_3_raw = GHWPLGD_data
        .filter(row => row["Statistic"] == "Median Wage" && row["Year"] == latest_year && row["Local Government District"] == "Northern Ireland" && row["Pay Rate"] == "Hourly (excluding overtime)" && row["Working Pattern"] == "Full-Time")
        .map(col => col["Males"])[0];

    // BuildR display value: 17.87
    const headline_3 = headline_3_raw.toFixed(2);
    insertValue("headline-3-value", headline_3);


    // Content for card 4

    const headline_4_raw = GHWPLGD_data
        .filter(row => row["Statistic"] == "Median Wage" && row["Year"] == latest_year && row["Local Government District"] == "Northern Ireland" && row["Pay Rate"] == "Weekly" && row["Working Pattern"] == "All")
        .map(col => col["All Persons"])[0];

    // BuildR display value: 591.9
    const headline_4 = headline_4_raw.toLocaleString("en-GB", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    });
    insertValue("headline-4-value", headline_4);


    // Content for card 5

    const headline_5_raw = GHWPLGD_data
        .filter(row => row["Statistic"] == "Median Wage" && row["Year"] == latest_year && row["Local Government District"] == "Northern Ireland" && row["Pay Rate"] == "Weekly" && row["Working Pattern"] == "Full-Time")
        .map(col => col["Females"])[0];

    // BuildR display value: 678.4
    const headline_5 = headline_5_raw.toFixed(1);
    insertValue("headline-5-value", headline_5);


    // Content for card 6

    const headline_6_raw = GHWPLGD_data
        .filter(row => row["Statistic"] == "Median Wage" && row["Year"] == latest_year && row["Local Government District"] == "Northern Ireland" && row["Pay Rate"] == "Weekly" && row["Working Pattern"] == "Full-Time")
        .map(col => col["Males"])[0];

    // BuildR display value: 742.5
    const headline_6 = headline_6_raw.toFixed(1);
    insertValue("headline-6-value", headline_6);


    // Content for card 7

    const [GAPLGD_data, GAPLGD_meta] = await readData("GAPLGD");

    const headline_7_raw = GAPLGD_data
        .filter(row => row["Statistic"] == "Median Wage" && row["Year"] == latest_year && row["Local Government District"] == "Northern Ireland" && row["Working Pattern"] == "Full-Time")
        .map(col => col["All Persons"])[0];

    // BuildR display value: 37,052
    const headline_7 = headline_7_raw.toLocaleString("en-GB", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    insertValue("headline-7-value", headline_7);


    // Content for card 8

    const headline_8_raw = GAPLGD_data
        .filter(row => row["Statistic"] == "Median Wage" && row["Year"] == latest_year && row["Local Government District"] == "Northern Ireland" && row["Working Pattern"] == "Full-Time")
        .map(col => col["Females"])[0];

    // BuildR display value: 35,533
    const headline_8 = headline_8_raw.toLocaleString("en-GB", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    insertValue("headline-8-value", headline_8);


    // Content for card 9

    const headline_9_raw = GAPLGD_data
        .filter(row => row["Statistic"] == "Median Wage" && row["Year"] == latest_year && row["Local Government District"] == "Northern Ireland" && row["Working Pattern"] == "Full-Time")
        .map(col => col["Males"])[0];

    // BuildR display value: 38,053
    const headline_9 = headline_9_raw.toLocaleString("en-GB", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    insertValue("headline-9-value", headline_9);


})
