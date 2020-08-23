import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';

const SearchPage = () => {
    return (
        <div className="searchPage">
           <div className="searchPage_filter">
               <TuneIcon />
               <h2>FILTER</h2>
           </div>
           <hr/>

           <ChannelRow 
               image="https://scontent.flko3-1.fna.fbcdn.net/v/t1.0-9/84649327_2575376172673763_1979434290810716160_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=psDIKLdPf84AX9Zh0VF&_nc_ht=scontent.flko3-1.fna&oh=a75e5ddd76f77e9f8ef838dabefd4e5a&oe=5F555E41"
               channel="Athleteharshit"
               verified
               subs="100k"
               noOfVideos={198}
               description="you can find awesome programming lessone here!. Also, expect programming tips and tricks that will take your coding skill to the...."
           />

           <hr/>

           <VideoRow 
               image="https://i.ytimg.com/vi/NWOeM-1tgUI/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAsWhPdHsDx_5ttXOuGBr0IdT9PTg"
               views="1.4M"
               subs="100k"
               description="Do you want free training.. check out my video"
               timestamp="1 months ago"
               channel="Athleteharshit"
               title="Let's build youtube clone with React js for practice"
           />
           <VideoRow 
               image="https://i.ytimg.com/vi/NWOeM-1tgUI/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAsWhPdHsDx_5ttXOuGBr0IdT9PTg"
               views="1.4M"
               subs="100k"
               description="Do you want free training.. check out my video"
               timestamp="1 months ago"
               channel="Athleteharshit"
               title="Let's build youtube clone with React js for practice"
           />
           <VideoRow 
               image="https://i.ytimg.com/vi/NWOeM-1tgUI/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAsWhPdHsDx_5ttXOuGBr0IdT9PTg"
               views="1.4M"
               subs="100k"
               description="Do you want free training.. check out my video"
               timestamp="1 months ago"
               channel="Athleteharshit"
               title="Let's build youtube clone with React js for practice"
           />
           <VideoRow 
               image="https://i.ytimg.com/vi/NWOeM-1tgUI/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAsWhPdHsDx_5ttXOuGBr0IdT9PTg"
               views="1.4M"
               subs="100k"
               description="Do you want free training.. check out my video"
               timestamp="1 months ago"
               channel="Athleteharshit"
               title="Let's build youtube clone with React js for practice"
           />
           <VideoRow 
               image="https://i.ytimg.com/vi/NWOeM-1tgUI/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAsWhPdHsDx_5ttXOuGBr0IdT9PTg"
               views="1.4M"
               subs="100k"
               description="Do you want free training.. check out my video"
               timestamp="1 months ago"
               channel="Athleteharshit"
               title="Let's build youtube clone with React js for practice"
           />
        </div>
    )
}

export default SearchPage;
