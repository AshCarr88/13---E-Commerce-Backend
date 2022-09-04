const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'metal music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'silver',
  },
  {
    tag_name: 'pop culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
