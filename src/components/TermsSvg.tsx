import { UserContext } from "../contexts/context";
import React, { useContext, useEffect, useRef, useState } from "react";

export function TermsSvg() {
    const { idVersao, setIdVersao } = useContext(UserContext);  

  const getFillColor = () => {
    switch (idVersao) {
      case '1':
        return "#5198E5"; // Red color for idVersao 1
      case '2':
        return "#FFCF00"; // Green color for idVersao 2
      case '3':
        return "#0000FF"; // Blue color for idVersao 3
      case '4':
        return "#174EA6"; // Yellow color for idVersao 4
      default:
        return "#FFCF00"; // Default color if idVersao doesn't match any case
    }
  };

  const getFillColor2 = () => {
    switch (idVersao) {
      case '1':
        return "#174EA6"; // Red color for idVersao 1
      case '2':
        return "#238536"; // Green color for idVersao 2
      case '3':
        return "#0000FF"; // Blue color for idVersao 3
      case '4':
        return "#8AB4F8"; // Yellow color for idVersao 4
      default:
        return "#FFCF00"; // Default color if idVersao doesn't match any case
    }
  };

    return (
  
<svg  height="full"  fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_708_153)">
<path d="M78.7599 111.22C85.7299 111.22 87.3799 113.06 88.5899 114.41C95.6099 122.24 103.2 154.22 98.0899 200.81C94.1099 237.04 95.0799 263.3 95.7899 282.62C96.9899 314.85 96.2999 319.25 82.1699 324.17C78.9699 325.29 75.7499 325.33 72.3199 324.3C59.9899 320.59 37.9199 297.03 19.6099 259.17C13.4899 246.52 8.72993 234.18 5.42993 222.71V273.85C24.1799 310.31 47.8599 337.05 66.7699 342.73C70.2099 343.77 73.6999 344.29 77.1399 344.29C80.9799 344.29 84.8099 343.64 88.5099 342.35C116.9 332.46 116.16 312.35 115.03 281.84C114.34 263.25 113.4 237.78 117.22 202.92C122.14 158.13 116.26 116.45 102.93 101.56C98.9199 97.1 92.5599 91.98 78.7699 91.98C52.1999 91.98 24.6599 109.46 5.43993 131.68V165.81C18.7799 138.97 50.9899 111.23 78.7599 111.22Z"fill={getFillColor2()}/>
<path d="M49.3699 484.48C52.6499 488.8 58.7799 489.69 63.1299 486.46C67.5399 483.18 68.4499 476.93 65.1199 472.55C51.8399 455.1 38.3799 438.07 25.1899 421.39C18.4999 412.93 11.8999 404.58 5.42993 396.32V428.24C6.84993 430.04 8.27993 431.84 9.70993 433.65C22.8099 450.22 36.1799 467.14 49.3699 484.48Z" fill={getFillColor2()}/>
<path d="M78.7599 19.75C110.04 19.75 137 31.37 156.7 53.35C173.51 72.1 184.39 97.63 189.11 128.81C190.29 136.59 199.61 139.95 205.39 134.61L205.58 134.43C207.97 132.22 209.08 128.97 208.59 125.75C203.26 90.73 190.77 61.77 171.4 40.16C147.85 13.89 115.82 0 78.7599 0C55.3299 0 29.9399 6.16 5.42993 18.3V40.49C29.7399 26.75 55.3599 19.75 78.7599 19.75Z" fill={getFillColor2()}/>
<path d="M46.3899 404.65C54.9899 415.52 63.8099 426.67 72.6799 438.09C75.7399 442.03 81.3099 442.57 85.1199 439.33C85.1299 439.32 85.1399 439.31 85.1499 439.3C88.9099 436.18 89.6899 430.74 86.6899 426.88C77.8199 415.48 69.0199 404.35 60.4199 393.48C40.6999 368.56 21.7799 344.64 5.41992 321.67V352C18.2699 369.1 32.1299 386.62 46.3899 404.65Z" fill={getFillColor()}/>
<path d="M78.7599 64.71C97.1599 64.71 112.13 70.99 123.23 83.37C141.85 104.15 149.8 141.78 145.89 189.96C145.4 195.96 150.86 200.73 156.74 199.44C160.6 198.59 163.45 195.31 163.76 191.36C168.03 138.2 158.5 95.83 136.59 71.39C121.95 55.05 102.49 46.77 78.7699 46.77C55.3799 46.77 29.2499 55.36 5.43994 72.19V94.75C28.6399 74.89 55.3099 64.71 78.7599 64.71Z" fill={getFillColor()}/>




</g>
<defs>
<clipPath id="clip0_708_153">
<rect width="818.28" height="872.95" fill="white"/>
</clipPath>
</defs>
</svg>
      
    );
  }