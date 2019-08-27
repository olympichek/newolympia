import Editor from "../../../libs/ckeditor5-build-custom";
import {Cookie} from "./Cookie";

export class PageEditor {

    load(args) {
        Editor
            .create(document.querySelector("#editor"))
            .then(newEditor => {
                const toolbarContainer = document.querySelector("#toolbar-container");
                this.editor = newEditor;
                toolbarContainer.appendChild(newEditor.ui.view.toolbar.element);
                newEditor.model.document.on("change:data", () => {
                    this.setUnsaved();
                });
            })
            .catch(error => {
                console.error(error);
            });
        const nameInput = document.querySelector("#name-russian-input");
        nameInput.addEventListener("input", this.setUnsaved);
        const submit = document.querySelector("#page_data_submit");
        submit.addEventListener( "click", () => {
            this.submit(args["page"]);
        });
    }

    setUnsaved() {
        const statusText = document.querySelector('#page_editing_status_span');
        statusText.innerHTML = "не сохранено";
        statusText.style.color = "red";
    }

    setSaved() {
        const statusText = document.querySelector("#page_editing_status_span");
        statusText.innerHTML = "сохранено";
        statusText.style.color = "green";
    }

    submit(pageName) {
        const editorData = this.editor.getData();
        const pageNameRus = document.querySelector("#name-russian-input").value.trim();
        const token = Cookie.getCookieByName("temp_hash").value;
        const requestObj = {
            "page_name": pageName,
            "page_name_rus": pageNameRus,
            "page_text": editorData,
            "token": token
        };
        const request = JSON.stringify(requestObj);
        const xhr = new XMLHttpRequest();
        xhr.open("POST","/admin/page_admin/save",true);
        xhr.setRequestHeader("Content-type","application/json");
        xhr.send(request);
        xhr.onload = () => {
            console.log(xhr.responseText);
            this.setSaved();
        }
    }

}