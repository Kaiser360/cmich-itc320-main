"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];
// creating consts to hold the sales amount per quarter 
const q1Sales = region1[0]+region2[0]+region3[0]+region4[0]+region5[0];
const q2Sales = region1[1]+region2[1]+region3[1]+region4[1]+region5[1];
const q3Sales = region1[2]+region2[2]+region3[2]+region4[2]+region5[2];
const q4Sales = region1[3]+region2[3]+region3[3]+region4[3]+region5[3];

//writing to the document and creating the subheading sales by quarter 
document.write("<h2>Sales by Quarter</h2>"+"Q1: $" + q1Sales + "<br>" + "Q2: $" + q2Sales + "<br>" + "Q3: $" + q3Sales + "<br>" + "Q4: $" + q4Sales)

//creating consts to hold each regions sales figures
const region1Sales = region1[0] + region1[1] + region1[2] + region1[3];
const region2Sales = region2[0] + region2[1] + region2[2] + region2[3];
const region3Sales = region3[0] + region3[1] + region3[2] + region3[3];
const region4Sales = region4[0] + region4[1] + region4[2] + region4[3];
const region5Sales = region5[0] + region5[1] + region5[2] + region5[3];

//writing to the document and creating the subheading for sales by regions
document.write("<h2>Sales by Region</h2>"+"Region 1: $" + region1Sales + "<br>" + "Region 2: $" + region2Sales + "<br>"+ "Region 3: $" + region3Sales + "<br>"+ "Region 4: $" + region4Sales + "<br>"+"Region 5: $" + region5Sales + "<br>")

//creating const to hold the total amount of sales 
const totalSales = region1Sales + region2Sales + region3Sales + region4Sales + region5Sales;

//writing to the document and creating the subheading for total sales
document.write("<h2>Total Sales</h2>"+"$" + totalSales);
