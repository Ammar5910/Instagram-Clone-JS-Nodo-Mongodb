import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
        <div class="search-bar">
        <input type="text" class="search-input" placeholder="Search...">
        <button><i class="fas fa-search"></i></button>
        <div class="search-results" style="display: none;">
        </div>
    </div>
    
    <div class="stories">
    <div class="story-row">
        <div class="story card">
            <div class="story-thumbnail" style="height: 150px">
            </div>
            <div class="text-skeleton text-skeleton-100"></div>
            <div class="text-skeleton text-skeleton-50"></div>
        </div>
    </div>
    <div class="story-row">
        <div class="story card">
            <div class="story-thumbnail" style="height: 150px">
            </div>
            <div class="text-skeleton text-skeleton-100"></div>
            <div class="text-skeleton text-skeleton-50"></div>
        </div>
        <div class="story card">
            <div class="story-thumbnail" style="height: 150px">
            </div>
            <div class="text-skeleton text-skeleton-100"></div>
            <div class="text-skeleton text-skeleton-50"></div>
        </div>
    </div>
</div>

    <div class="modal fade bd-example-modal-lg" id="Other_profile_modal" tabindex="-1" role="dialog" aria-labelledby="Other_profile_modal"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <header>

                    <div>

                        <div>

                            <div class="profile-image">

                                <div class="avatar-upload">
                                    <div class="avatar-preview">
                                        <div id="other_profile_image_preview" style="background-image: url("
                                            /images/default-user.jpg");">
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <h4>Name: </h4>
                                </div>
                                <div class="col-md-6">
                                    <h5 id="other-profile-fullName-text"></h5>
                                </div>
                                <div class="col-md-6">
                                    <h4>Email: </h4>
                                </div>
                                <div class="col-md-6">
                                    <h5 id="other-profile-email-text"></h5>
                                </div>
                                <div class="col-md-6">
                                    <h4>MISIS: </h4>
                                </div>
                                <div class="col-md-6">
                                    <h5 id="other-profile-misis-text"></h5>
                                </div>
                                <div class="col-md-6">
                                    <h4>DOB: </h4>
                                </div>
                                <div class="col-md-6">
                                    <h5 id="other-profile-dob-text"></h5>
                                </div>
                            </div>
                            <div style="margin-left:5rem !important">
                                <button id="btn-follow" class="btn btn-primary">Follow</button>
                            </div>

                        </div>
                    </div>
                </header>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
        `;
    }
}

