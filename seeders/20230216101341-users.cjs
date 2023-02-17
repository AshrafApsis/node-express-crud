'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return await queryInterface.bulkInsert('users', [{
      firstName: 'Arte',
      lastName: 'Rennicks',
      email: 'arennicksc@bloglines.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Arte',
      lastName: 'Rennicks',
      email: 'arennicksc@bloglines.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Thaxter',
      lastName: 'Rundle',
      email: 'trundled@admin.ch',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Thaddeus',
      lastName: 'Kenforth',
      email: 'tkenforthe@feedburner.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('users', null, {});
  }
};
