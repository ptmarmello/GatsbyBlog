import React from 'react';
import CategoriesLayout from './layouts/categoriesLayout';
// import db from '../data/folders_db.json';

export default function MinorTemplate({ pageContext: { minorData } }) {
    return(
        <CategoriesLayout pageTitle="Minors" data={minorData} />
    );
}
