define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchEnd defined for imgHamburgerOpen **/
    AS_Image_e03741100fc741cd935ddf76810a9208: function AS_Image_e03741100fc741cd935ddf76810a9208(eventobject, x, y) {
        var self = this;

        function MOVE_ACTION____ac0cae48226c41958335047faa0c6371_Callback() {
            self.view.imgHamburgerOpen.isVisible = false;
            self.view.imgHamburgerClose.isVisible = true;
        }
        function MOVE_ACTION____bbb8e6d428ae402582e863e21d55dce1_Callback() {}
        self.view.flexMainContent.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "80%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": MOVE_ACTION____bbb8e6d428ae402582e863e21d55dce1_Callback
        });
        self.view.flexMenuOptions.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": MOVE_ACTION____ac0cae48226c41958335047faa0c6371_Callback
        });
    },
    /** onTouchEnd defined for imgHamburgerClose **/
    AS_Image_fe13a064ec9042919dc18c7584f56231: function AS_Image_fe13a064ec9042919dc18c7584f56231(eventobject, x, y) {
        var self = this;

        function ____g4811c7d0a6a42d2baf30338faa7bf69_Callback() {
            self.view.imgHamburgerOpen.isVisible = true;
            self.view.imgHamburgerClose.isVisible = false;
        }
        function ____j95064cc3a904cd6bfae750c874a6176_Callback() {}
        self.view.flexMenuOptions.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "-80%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": "1",
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": ____j95064cc3a904cd6bfae750c874a6176_Callback
        });
        self.view.flexMainContent.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": ____g4811c7d0a6a42d2baf30338faa7bf69_Callback
        });
    },
    /** onClick defined for btnMenuOption1 **/
    AS_Button_d47000b7c662482c8d665243a42d96ec: function AS_Button_d47000b7c662482c8d665243a42d96ec(eventobject) {
        var self = this;

        function MOVE_ACTION____c18eb32decad4d509d236e4dd626be22_Callback() {
            self.view.imgHamburgerOpen.isVisible = true;
            self.view.imgHamburgerClose.isVisible = false;
        }
        function MOVE_ACTION____ef67786033c042fb8baa0d040f6bfcb7_Callback() {}
        self.view.flexMenuOptions.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "-80%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": "1",
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": MOVE_ACTION____ef67786033c042fb8baa0d040f6bfcb7_Callback
        });
        self.view.flexMainContent.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": MOVE_ACTION____c18eb32decad4d509d236e4dd626be22_Callback
        });
    }
});