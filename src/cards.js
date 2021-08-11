import React from 'react';
import './cards.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.min.css';

class Cards extends React.Component {
    render() {
        return (
            <div class="cards-container">
                <div class="row row-cols-1 row-cols-md-3 gy-2 gx-2 mb-4">
                    <div class="col ">
                        <div class="card mt-4 h-100">
                            <div class="card-body">
                                <div class="card-title mt-4"><span class="heading">Personal Room <i class="fa fa-lock" /></span ><span class="sub-heading">/julia</span></div>
                                <div class="profile-icons">
                                    <img src="https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                    <div class="card mt-4 h-100">
                            <div class="card-body">
                                <div class="card-title mt-4"><span class="heading">Monthly All-Hands</span><span class="sub-heading">/acme-all</span></div>
                                <div class="profile-icons">
                                    <img src="https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png" />
                                    <img src="https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                    <div class="card mt-4 h-100">
                            <div class="card-body">
                                <div class="card-title mt-4"><span class="heading">Design Sync</span><span class="sub-heading">/designers</span></div>
                                <div class="profile-icons">
                                    <img src="https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png" />
                                    <img src="https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png" />
                                    <span id="ExtraProfiles">+9</span>
                                    <span id="Live">LIVE</span>
                                </div>
                            </div>
                            <div id="ColoredFooter" class="card-footer">
                            </div>
                        </div>
                    </div>
                    <div class="col">
                    <div class="card mt-4 h-100">
                            <div class="card-body">
                                <div class="card-title mt-4"><span class="heading">Morning Standup</span><span class="sub-heading">/standup</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                    <div class="card mt-4 h-100">
                            <div class="card-body">
                                <div class="card-title mt-4"><span class="heading">Hangout <i class="fa fa-headphones" /></span><span class="sub-heading">/no-video</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="col" >
                        <div id="AddCard" class="card mt-4 h-100">
                            <div class="card-body">
                                <i id="Plus" class="bi bi-plus-lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cards;