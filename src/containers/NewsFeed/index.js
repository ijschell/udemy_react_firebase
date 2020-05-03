import React, { Component } from 'react'
import Post from '../../components/Post'
import './styles.scss'

export default class NewsFeed extends Component {
    render() {
        return (
            <div id="newsfeed">
                <Post image="http://placekitten.com/300/200" />
                <Post image="http://placekitten.com/300/200" />
            </div>                
        )
    }
}
