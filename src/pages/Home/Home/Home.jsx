import React from 'react';
import Search from '../Search/Search';
import CollegeCard from '../CollegeCard/CollegeCard';
import ImageGallery from '../ImageGallery/ImageGallery';
import ResearchPaper from '../ResearchPaper/ResearchPaper';
import ViewReview from '../ViewReview/ViewReview';

const Home = () => {
    return (
        <div className='flex flex-col'>
           <Search></Search> 
           <CollegeCard></CollegeCard>
           <ImageGallery></ImageGallery>
           <ResearchPaper></ResearchPaper>
           <ViewReview></ViewReview>
        </div>
    );
};

export default Home;