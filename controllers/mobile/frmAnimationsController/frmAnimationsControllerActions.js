define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnMove **/
    AS_Button_ae9879144c99442e877fe33e241524f3: function AS_Button_ae9879144c99442e877fe33e241524f3(eventobject) {
        var self = this;

        function MOVE_ACTION____g5743fbd7c8e4895bc106910dd2a0ced_Callback() {}
        self.view.btnTest.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "0dp",
                "left": "0dp",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": "2",
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1,
            "direction": kony.anim.DIRECTION_NONE
        }, {
            "animationEnd": MOVE_ACTION____g5743fbd7c8e4895bc106910dd2a0ced_Callback
        });
    },
    /** onClick defined for btnScale **/
    AS_Button_a2dae6514b20401488e3674f92f76d1b: function AS_Button_a2dae6514b20401488e3674f92f76d1b(eventobject) {
        var self = this;

        function SCALE_ACTION____d4779d1b54ba4292bc4128172f13602b_Callback() {}
        self.view.btnTest.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "width": "100dp",
                "height": "100dp"
            }
        }), {
            "delay": 0,
            "iterationCount": "2",
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1,
            "direction": kony.anim.DIRECTION_ALTERNATE
        }, {
            "animationEnd": SCALE_ACTION____d4779d1b54ba4292bc4128172f13602b_Callback
        });
    },
    /** onClick defined for btnRotate **/
    AS_Button_jfe93bd5ef6c4779a4832192e053cd7c: function AS_Button_jfe93bd5ef6c4779a4832192e053cd7c(eventobject) {
        var self = this;

        function ROTATE_ACTION____g37d6cb558c5447193ac76448e7f2b7b_Callback() {}
        var trans100 = kony.ui.makeAffineTransform();
        trans100.rotate(90);
        self.view.btnTest.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "transform": trans100
            }
        }), {
            "delay": 0,
            "iterationCount": "2",
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1,
            "direction": kony.anim.DIRECTION_ALTERNATE
        }, {
            "animationEnd": ROTATE_ACTION____g37d6cb558c5447193ac76448e7f2b7b_Callback
        });
    },
    /** onClick defined for btnTransform **/
    AS_Button_g6554df2803c4636915dbbedd88f6acf: function AS_Button_g6554df2803c4636915dbbedd88f6acf(eventobject) {
        var self = this;

        function TRANSFORM_ACTION_NEW____c3ac0c68547e40cf86abfe121245f3be_Callback() {}
        var trans100 = kony.ui.makeAffineTransform();
        trans100.rotate(90);
        trans100.translate(25, 25);
        trans100.scale(1.5, 1.5);
        self.view.btnTest.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "transform": trans100
            }
        }), {
            "delay": 0,
            "iterationCount": "2",
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1,
            "direction": kony.anim.DIRECTION_ALTERNATE
        }, {
            "animationEnd": TRANSFORM_ACTION_NEW____c3ac0c68547e40cf86abfe121245f3be_Callback
        });
    },
    /** onClick defined for btnMoveContainer **/
    AS_Button_eb09878d4be7447ca4b0f727d2d77cf9: function AS_Button_eb09878d4be7447ca4b0f727d2d77cf9(eventobject) {
        var self = this;

        function ROTATE_ACTION_3D____d623d211e9c641b7b966bb27000e2b0e_Callback() {}
        //#ifdef winphone8
        //Rotate 3D not supported for windows devices
        //#else
        var trans100 = kony.ui.makeAffineTransform();
        trans100.rotate3D(90, 0, 1, 0);
        trans100.setPerspective(100)
        self.view.btnTest.animate(
        kony.ui.createAnimation({
            "100": {
                "anchorPoint": {
                    "x": 0.5,
                    "y": 0.5
                },
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "transform": trans100
            }
        }), {
            "delay": 0,
            "iterationCount": "2",
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1,
            "direction": kony.anim.DIRECTION_ALTERNATE
        }, {
            "animationEnd": ROTATE_ACTION_3D____d623d211e9c641b7b966bb27000e2b0e_Callback
        });
        //#endif
    }
});