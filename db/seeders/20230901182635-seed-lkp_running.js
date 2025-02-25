"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const RUNNING_DATAENTRY = 
    [[510, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    [520, 49, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    [530, 48, 49, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    [540, 47, 48, 49, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    [550, 46, 47, 48, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    [560, 45, 46, 47, 49, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    [570, 44, 45, 46, 48, 49, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    [580, 43, 44, 45, 47, 48, 49, 50, 50, 50, 50, 50, 50, 50, 50],
    [590, 42, 43, 44, 46, 47, 48, 49, 50, 50, 50, 50, 50, 50, 50],
    [600, 41, 42, 43, 45, 46, 47, 48, 49, 50, 50, 50, 50, 50, 50],
    [610, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 50, 50, 50, 50],
    [620, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 50, 50, 50, 50],
    [630, 38, 39, 40, 42, 43, 44, 45, 46, 47, 48, 49, 50, 50, 50],
    [640, 38, 38, 39, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 50],
    [650, 37, 38, 38, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [660, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
    [670, 36, 36, 37, 38, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    [680, 35, 36, 36, 37, 38, 38, 39, 40, 41, 42, 43, 44, 45, 46],
    [690, 35, 35, 36, 37, 37, 38, 38, 39, 40, 41, 42, 43, 44, 45],
    [700, 34, 35, 35, 36, 37, 37, 38, 38, 39, 40, 41, 42, 43, 44],
    [710, 33, 34, 35, 36, 36, 37, 37, 38, 38, 39, 40, 41, 42, 43],
    [720, 32, 33, 34, 35, 36, 36, 37, 37, 38, 38, 39, 40, 41, 42],
    [730, 31, 32, 33, 35, 35, 36, 36, 37, 37, 38, 38, 39, 40, 41],
    [740, 30, 31, 32, 34, 35, 35, 36, 36, 37, 37, 38, 38, 39, 40],
    [750, 29, 30, 31, 33, 34, 35, 35, 36, 36, 37, 37, 38, 38, 39],
    [760, 28, 29, 30, 32, 33, 34, 35, 35, 36, 36, 37, 37, 38, 38],
    [780, 27, 28, 29, 31, 32, 33, 34, 35, 35, 36, 36, 37, 37, 38],
    [790, 26, 27, 28, 30, 31, 32, 33, 34, 35, 35, 36, 36, 37, 37],
    [800, 25, 26, 27, 29, 30, 31, 32, 33, 34, 35, 35, 36, 36, 37],
    [810, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 35, 36, 36],
    [820, 23, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35, 35, 36],
    [830, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 35],
    [840, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
    [850, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
    [860, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
    [870, 18, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
    [880, 16, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    [890, 14, 16, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [900, 12, 14, 16, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    [910, 10, 12, 14, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
    [920, 8, 10, 12, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
    [930, 6, 8, 10, 14, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26],
    [940, 4, 6, 8, 12, 14, 16, 18, 19, 20, 21, 22, 23, 24, 25],
    [950, 2, 4, 6, 10, 12, 14, 16, 18, 19, 20, 21, 22, 23, 24],
    [960, 1, 2, 4, 8, 10, 12, 14, 16, 18, 19, 20, 21, 22, 23],
    [970, 0, 1, 2, 6, 8, 10, 12, 14, 16, 18, 19, 20, 21, 22],
    [980, 0, 0, 1, 4, 6, 8, 10, 12, 14, 16, 18, 19, 20, 21],
    [990, 0, 0, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 19, 20],
    [1000, 0, 0, 0, 1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 19],
    [1010, 0, 0, 0, 0, 1, 2, 4, 6, 8, 10, 12, 14, 16, 18],
    [1020, 0, 0, 0, 0, 0, 1, 2, 4, 6, 8, 10, 12, 14, 16],
    [1030, 0, 0, 0, 0, 0, 0, 1, 2, 4, 6, 8, 10, 12, 14],
    [1040, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 6, 8, 10, 12],
    [1050, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 6, 8, 10],
    [1060, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 6, 8],
    [1070, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
    [1080, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4],
    [1090, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
    [1100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]]

    //Processing data from table
    const arrayOfObjects = RUNNING_DATAENTRY.reduce((flattened, row) => {
      return flattened.concat(row.map((value, columnIndex) => {
        return {
          performance: row[0], // Calculate performance based on index 0 of each row
          age_group: columnIndex, // Age group is the index of the column within each row
          points: value, // Set points based on the column value
          created_at: new Date(),
          updated_at: new Date(),
        };
      }));
    }, []).filter(obj => obj.age_group !== 0);

    console.log(arrayOfObjects);
    
    
    await queryInterface.bulkInsert(
      "lkp_runnings",
      arrayOfObjects,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("lkp_runnings", null, {});
  },
};