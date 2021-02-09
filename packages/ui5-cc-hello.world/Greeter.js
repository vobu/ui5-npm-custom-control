sap.ui.define(["sap/ui/core/Control"], (Control) => {
    return Control.extend("cc.hello.world.Greeter", {
        renderer: {
            apiVersion: 2,
            /**
             * create the view layer by outputting html
             * <p ...>UI5 custom control: Hello World!</p>
             *
             * @param {sap.ui.core.RenderManager} oRM
             * @param {sap.ui.core.Control} oControl
             */
            render(oRM, oControl) {
                oRM.openStart("p", oControl)
                oRM.writeControlData(oControl)
                oRM.openEnd()
                oRM.write("UI5 custom control: Hello World!")
                oRM.close("p")
            }
        }
    })
})
