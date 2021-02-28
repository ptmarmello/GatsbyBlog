import React from 'react';
// import db from '../data/folders_db.json';
import CategoriesLayout from './layouts/categoriesLayout';

export default function MajorTemplate({ pageContext: { majorData } }) {
    return(
        <CategoriesLayout pageTitle="Majors" data={majorData} />
    );
}
