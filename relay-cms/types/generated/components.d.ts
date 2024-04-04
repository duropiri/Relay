import type { Schema, Attribute } from '@strapi/strapi';

export interface StatisticStatistic extends Schema.Component {
  collectionName: 'components_statistic_statistics';
  info: {
    displayName: 'Statistic';
    description: '';
  };
  attributes: {
    description: Attribute.String;
    value: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'statistic.statistic': StatisticStatistic;
    }
  }
}
