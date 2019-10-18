define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnLectures **/
    AS_Button_cac81f5e6a6e47c4bd5c9a703050d3e2: function AS_Button_cac81f5e6a6e47c4bd5c9a703050d3e2(eventobject) {
        var self = this;
        self.view.flexListOfLectures.isVisible = true;
        self.view.flexListOfExercises.isVisible = false;
    },
    /** onClick defined for btnExercises **/
    AS_Button_ia6965beb27d4e22a97f1627b720b77c: function AS_Button_ia6965beb27d4e22a97f1627b720b77c(eventobject) {
        var self = this;
        self.view.flexListOfLectures.isVisible = false;
        self.view.flexListOfExercises.isVisible = true;
    },
    /** onClick defined for flex1 **/
    AS_FlexContainer_a9a92e90fa17434689e158a46eadd572: function AS_FlexContainer_a9a92e90fa17434689e158a46eadd572(eventobject) {
        var self = this;
        kony.application.showLoadingScreen("skProgress", "Loading the video, Please wait...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
            enableMenuKey: false,
            enableBackKey: false
        });
        this.view.videoLecture.setSource({
            "mp4": "http://s3.amazonaws.com/hapyak_uploads/group_uploads/10/12985/videos/4f3d1fe4c35d496497c2c576085b3f6e/01N.mp4"
        });
        this.view.videoLecture.play();
    },
    /** onClick defined for flex2 **/
    AS_FlexContainer_b72bcb198f2742d3a4d505e4c6a0a4a5: function AS_FlexContainer_b72bcb198f2742d3a4d505e4c6a0a4a5(eventobject) {
        var self = this;
        kony.application.showLoadingScreen("skProgress", "Loading the video, Please wait...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
            enableMenuKey: false,
            enableBackKey: false
        });
        this.view.videoLecture.setSource({
            "mp4": "http://s3.amazonaws.com/hapyak_uploads/group_uploads/10/12985/videos/761f58d41b114c4bb3f313369c9033d3/02N.mp4"
        });
        this.view.videoLecture.play();
    },
    /** onClick defined for flex3 **/
    AS_FlexContainer_ec3eb40fb5814df3a2e8f49aa01f7a55: function AS_FlexContainer_ec3eb40fb5814df3a2e8f49aa01f7a55(eventobject) {
        var self = this;
        kony.application.showLoadingScreen("skProgress", "Loading the video, Please wait...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
            enableMenuKey: false,
            enableBackKey: false
        });
        this.view.videoLecture.setSource({
            "mp4": "http://s3.amazonaws.com/hapyak_uploads/group_uploads/10/12985/videos/a3cb28629767463d976112945e5d370f/03N.mp4"
        });
        this.view.videoLecture.play();
    },
    /** onClick defined for flex4 **/
    AS_FlexContainer_ac549e9b7b7d41639fe008305d121a29: function AS_FlexContainer_ac549e9b7b7d41639fe008305d121a29(eventobject) {
        var self = this;
        kony.application.showLoadingScreen("skProgress", "Loading the video, Please wait...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
            enableMenuKey: false,
            enableBackKey: false
        });
        this.view.videoLecture.setSource({
            "mp4": "http://s3.amazonaws.com/hapyak_uploads/group_uploads/10/12985/videos/9541ec5bb2fd42e79d4a028328791f98/05N.mp4"
        });
        this.view.videoLecture.play();
    },
    /** onClick defined for flex5 **/
    AS_FlexContainer_f9e117f60be240b0b9d70cfcb08c4c5b: function AS_FlexContainer_f9e117f60be240b0b9d70cfcb08c4c5b(eventobject) {
        var self = this;
        kony.application.showLoadingScreen("skProgress", "Loading the video, Please wait...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
            enableMenuKey: false,
            enableBackKey: false
        });
        this.view.videoLecture.setSource({
            "mp4": "http://d2gfkxg3sax2yx.cloudfront.net/55085/videos/4cf894f398f9c7241c98120c0e/h264/video.mp4?Expires=1570533280&Signature=QcXophNmlsyOB82UotXMhUi7LG4ztDBkbtvA-Wy-AQUGTOb6ELfQPISBir~VFFUapvc30QRZQJc4T3jdyB7QLCNsw6Rq3Ofzom~gFzQAxl2GFYe0E6nri0RTh3dbiZAeN9HNWTKg6EwarWbFADFv2Ff65tGq6-1fEI2lWxdDeNo_&Key-Pair-Id=APKAJ57GT2Q37XGUBNZA"
        });
        this.view.videoLecture.play();
    },
    /** onClick defined for flex6 **/
    AS_FlexContainer_g36ef483c8b64316b3c74023acd829e5: function AS_FlexContainer_g36ef483c8b64316b3c74023acd829e5(eventobject) {
        var self = this;
        kony.application.showLoadingScreen("skProgress", "Loading the video, Please wait...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
            enableMenuKey: false,
            enableBackKey: false
        });
        this.view.videoLecture.setSource({
            "mp4": "http://s3.amazonaws.com/hapyak_uploads/group_uploads/10/12985/videos/4f3d1fe4c35d496497c2c576085b3f6e/01N.mp4"
        });
        this.view.videoLecture.play();
    },
    /** onClick defined for flexEx1 **/
    AS_FlexContainer_j83df165c0d8477180f93dc6280786f2: function AS_FlexContainer_j83df165c0d8477180f93dc6280786f2(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmCalculator");
        ntf.navigate();
    },
    /** onClick defined for flexEx2 **/
    AS_FlexContainer_a786da1468bf471397bb9cd77db3a81d: function AS_FlexContainer_a786da1468bf471397bb9cd77db3a81d(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmUsingWidgets1");
        ntf.navigate();
    },
    /** onClick defined for flexEx3 **/
    AS_FlexContainer_f4ac669eb7d74fef80b0efa62d876281: function AS_FlexContainer_f4ac669eb7d74fef80b0efa62d876281(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmUsingwidgets2");
        ntf.navigate();
    },
    /** onClick defined for flexEx4 **/
    AS_FlexContainer_iafc1d9ca5434f2399b8a38db563ed94: function AS_FlexContainer_iafc1d9ca5434f2399b8a38db563ed94(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDesignTechniques");
        ntf.navigate();
    },
    /** onClick defined for flexEx5 **/
    AS_FlexContainer_ecc55ae0815944a6a3e85ca6f9114b53: function AS_FlexContainer_ecc55ae0815944a6a3e85ca6f9114b53(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmActions");
        ntf.navigate();
    },
    /** onClick defined for flexEx6 **/
    AS_FlexContainer_bf52fb7e23154720825b7a16967a02bf: function AS_FlexContainer_bf52fb7e23154720825b7a16967a02bf(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmAnimations");
        ntf.navigate();
    },
    /** onClick defined for flexEx7 **/
    AS_FlexContainer_f284784a0828464c95846d278eb58752: function AS_FlexContainer_f284784a0828464c95846d278eb58752(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmActionEditor");
        ntf.navigate();
    },
    /** onClick defined for flexEx8 **/
    AS_FlexContainer_a746d24de3dd4eed9effa700597ae924: function AS_FlexContainer_a746d24de3dd4eed9effa700597ae924(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmOutsideOfDesign");
        ntf.navigate();
    },
    /** init defined for frmDay1 **/
    AS_Form_dcfd27efe8b24281aecfec10243238f5: function AS_Form_dcfd27efe8b24281aecfec10243238f5(eventobject) {
        var self = this;
        this.view.videoLecture.onPrepared = this.onPreparedCallback;
    },
    /** preShow defined for frmDay1 **/
    AS_Form_c6da9d01b25b4488af753d56b83c23a3: function AS_Form_c6da9d01b25b4488af753d56b83c23a3(eventobject) {
        var self = this;
        kony.application.showLoadingScreen("skProgress", "Loading the video, Please wait...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
            enableMenuKey: false,
            enableBackKey: false
        });
    }
});