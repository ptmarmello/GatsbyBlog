import React from 'react';
import CategoriesLayout from './layouts/categoriesLayout';

export default function SubjectTemplate({ pageContext: { subjectData } }) {
    return(
        <CategoriesLayout pageTitle="Subjects" data={subjectData} />
    );
}