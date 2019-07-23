(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<div class=\"wrapper\">\n    <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/note/archived-notes/archived-notes.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/note/archived-notes/archived-notes.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/note/archivednote-list/archivednote-list.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/note/archivednote-list/archivednote-list.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container myContainer\">\n\n  <div class=\"card-header\">\n    <h3>Archived Notes</h3>\n  </div>\n\n  <div *ngFor=\"let archivedNote of notes\" class=\"card myCard\">\n\n    <span style=\"display: none\">{{archivedNote.noteId}}</span>\n    <span class=\"myCard-heading\">{{archivedNote.noteTitle}}</span>\n    <span class=\"myCard-note\">{{archivedNote.noteContent}}</span>\n\n    <div class=\"myCard-buttons\">\n      <button  class=\"edit\" (click)=\"editNote(archivedNote.noteId)\"><i class=\"fa fa-edit\" ></i></button>\n      <button class=\"archive\" (click)=\"archiveNote(archivedNote.noteId)\"><i class=\"fa fa-archive\"></i></button>\n      <button class=\"delete\" (click)=\"deleteNote(archivedNote.noteId)\"><i class=\"fa fa-remove\"></i></button>\n    </div>\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/note/create-note/create-note.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/note/create-note/create-note.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 10px\">\n\n    <div class=\"card-header\">\n        <h3>New Note</h3>\n     </div>\n    \n    <div clas=\"card\">\n      \n      <div class=\"card-body\">\n            <form (ngSubmit)=\"onSubmit()\">\n          \n                <div class=\"form-group \">\n                  <label for=\"noteTitle\">Title</label>\n                  <input type=\"text\" id=\"noteTitle\" required [(ngModel)]=\"note.noteTitle\" name=\"title\" class=\"form-control\"/>\n                </div>\n            \n                <div class=\"form-group\">\n                  <label for=\"noteContent\">Note</label>\n                  <textarea cols=\"25\" rows=\"10\" id=\"noteContent\" required [(ngModel)]=\"note.noteContent\" name=\"content\" class=\"form-control\"></textarea>\n                </div>\n            \n                <div>\n                    <button type=\"submit\" class=\"btn btn-primary col-sm-12 col-md-2\" style=\"margin-right:5px; margin-bottom: 5px\" routerLink=\"notes\">Save</button>\n\n                \n                    <button (click)=\"cancel()\" class=\"btn btn-secondary col-sm-12 col-md-2\" style=\"margin-right:5px; margin-bottom: 5px\"> Cancel</button>\n                </div>\n            \n              </form>\n        </div>      \n     </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/note/edit-note/edit-note.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/note/edit-note/edit-note.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 10px\">\n\n  <div class=\"card-header\">\n    <h3>Edit Note</h3>\n  </div>\n\n  <div clas=\"card\">\n\n    <div class=\"card-body\">\n      <form (ngSubmit)=\"onSubmit()\">\n\n        <div class=\"form-group \">\n          <label for=\"noteTitle\">Title</label>\n          <input type=\"text\" id=\"noteTitle\" required [(ngModel)]=\"note.noteTitle\" name=\"title\" class=\"form-control\" [value]=\"note.noteTitle\"/>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"noteContent\">Note</label>\n          <textarea cols=\"25\" rows=\"10\" id=\"noteContent\" required [(ngModel)]=\"note.noteContent\" name=\"content\" class=\"form-control\" [value]=\"note.noteContent\"></textarea>\n        </div>\n\n        <div>\n          <button type=\"submit\" class=\"btn btn-primary col-sm-12 col-md-2\" style=\"margin-right:5px; margin-bottom: 5px\" routerLink=\"notes\">Save</button>\n\n\n          <button (click)=\"cancel()\" class=\"btn btn-secondary col-sm-12 col-md-2\" style=\"margin-right:5px; margin-bottom: 5px\"> Cancel</button>\n        </div>\n\n      </form>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/note/note-details/note-details.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/note/note-details/note-details.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"note\">\n\n  <div>\n    <label>Title:</label> {{note.noteTitle}}\n  </div>\n\n  <div>\n    <label>Content:</label> {{note.noteContent}}\n  </div>\n\n\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/note/note-list/note-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/note/note-list/note-list.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container myContainer\">\n\n    <div class=\"card-header\">\n        <h3>List of Notes</h3>\n    </div>\n\n    <div *ngFor=\"let note of notes\" class=\"card myCard\">\n\n        <span style=\"display: none\">{{note.noteId}}</span>\n        <span class=\"myCard-heading\">{{note.noteTitle}}</span>\n        <span class=\"myCard-note\">{{note.noteContent}}</span>\n        \n        <div class=\"myCard-buttons\">\n          <button  class=\"edit\" (click)=\"editNote(note.noteId)\"><i class=\"fa fa-edit\" ></i></button>\n          <button class=\"archive\" (click)=\"archiveNote(note.noteId)\"><i class=\"fa fa-archive\"></i></button>\n          <button class=\"delete\" (click)=\"deleteNote(note.noteId)\"><i class=\"fa fa-remove\"></i></button>\n        </div>\n      \n    </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/site-sections/footer/footer.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/site-sections/footer/footer.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer font-small bg-light pt-4\">\n\n  <div class=\"container-fluid text-center\">\n    <div class=\"footer-copyright text-center py-3\" style=\"color:white; background-color:black\" id=\"linksBottom\">\n    </div>\n  </div>\n\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/site-sections/nav/nav.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/site-sections/nav/nav.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n\n    <a class=\"navbar-brand\" routerLink=\"notes\">Note App</a>\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" id=\"toggle\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n\n        <li class=\"nav-item active\" id=\"notesLink\">\n          <a class=\"nav-link\" routerLink=\"notes\" (click)=\"changeLink1()\">List</a>\n        </li>\n\n        <li class=\"nav-item\" id=\"addLink\">\n          <a class=\"nav-link\" routerLink=\"add\" (click)=\"changeLink2()\">Add</a>\n        </li>\n\n        <li class=\"nav-item\" id=\"archivedLink\">\n            <a class=\"nav-link\" routerLink=\"archivedlist\" (click)=\"changeLink3()\">Archived</a>\n          </li>\n      </ul>\n    </div>\n\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_note_note_list_note_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/note/note-list/note-list.component */ "./src/app/components/note/note-list/note-list.component.ts");
/* harmony import */ var _components_note_create_note_create_note_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/note/create-note/create-note.component */ "./src/app/components/note/create-note/create-note.component.ts");
/* harmony import */ var _components_note_edit_note_edit_note_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/note/edit-note/edit-note.component */ "./src/app/components/note/edit-note/edit-note.component.ts");
/* harmony import */ var _components_note_archived_notes_archived_notes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/note/archived-notes/archived-notes.component */ "./src/app/components/note/archived-notes/archived-notes.component.ts");
/* harmony import */ var _components_note_archivednote_list_archivednote_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/note/archivednote-list/archivednote-list.component */ "./src/app/components/note/archivednote-list/archivednote-list.component.ts");








const routes = [
    { path: '', redirectTo: 'notes', pathMatch: 'full' },
    { path: 'notes', component: _components_note_note_list_note_list_component__WEBPACK_IMPORTED_MODULE_3__["NoteListComponent"] },
    { path: 'add', component: _components_note_create_note_create_note_component__WEBPACK_IMPORTED_MODULE_4__["CreateNoteComponent"] },
    { path: 'edit', component: _components_note_edit_note_edit_note_component__WEBPACK_IMPORTED_MODULE_5__["EditNoteComponent"] },
    { path: 'archived', component: _components_note_archived_notes_archived_notes_component__WEBPACK_IMPORTED_MODULE_6__["ArchivedNotesComponent"] },
    { path: 'archivedlist', component: _components_note_archivednote_list_archivednote_list_component__WEBPACK_IMPORTED_MODULE_7__["ArchivedNoteListComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Note App';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_note_note_list_note_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/note/note-list/note-list.component */ "./src/app/components/note/note-list/note-list.component.ts");
/* harmony import */ var _components_note_create_note_create_note_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/note/create-note/create-note.component */ "./src/app/components/note/create-note/create-note.component.ts");
/* harmony import */ var _components_note_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/note/note-details/note-details.component */ "./src/app/components/note/note-details/note-details.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_site_sections_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/site-sections/nav/nav.component */ "./src/app/components/site-sections/nav/nav.component.ts");
/* harmony import */ var _components_site_sections_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/site-sections/footer/footer.component */ "./src/app/components/site-sections/footer/footer.component.ts");
/* harmony import */ var _components_note_edit_note_edit_note_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/note/edit-note/edit-note.component */ "./src/app/components/note/edit-note/edit-note.component.ts");
/* harmony import */ var _components_note_archived_notes_archived_notes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/note/archived-notes/archived-notes.component */ "./src/app/components/note/archived-notes/archived-notes.component.ts");
/* harmony import */ var _components_note_archivednote_list_archivednote_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/note/archivednote-list/archivednote-list.component */ "./src/app/components/note/archivednote-list/archivednote-list.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_note_note_list_note_list_component__WEBPACK_IMPORTED_MODULE_6__["NoteListComponent"],
            _components_note_create_note_create_note_component__WEBPACK_IMPORTED_MODULE_7__["CreateNoteComponent"],
            _components_note_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_8__["NoteDetailsComponent"],
            _components_site_sections_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"],
            _components_site_sections_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
            _components_note_edit_note_edit_note_component__WEBPACK_IMPORTED_MODULE_12__["EditNoteComponent"],
            _components_note_archived_notes_archived_notes_component__WEBPACK_IMPORTED_MODULE_13__["ArchivedNotesComponent"],
            _components_note_archivednote_list_archivednote_list_component__WEBPACK_IMPORTED_MODULE_14__["ArchivedNoteListComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/note/archived-notes/archived-notes.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/note/archived-notes/archived-notes.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90ZS9hcmNoaXZlZC1ub3Rlcy9hcmNoaXZlZC1ub3Rlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/note/archived-notes/archived-notes.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/note/archived-notes/archived-notes.component.ts ***!
  \****************************************************************************/
/*! exports provided: ArchivedNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivedNotesComponent", function() { return ArchivedNotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_note_note_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/note/note.service */ "./src/app/services/note/note.service.ts");
/* harmony import */ var _services_note_archivednote_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/note/archivednote.service */ "./src/app/services/note/archivednote.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ArchivedNotesComponent = class ArchivedNotesComponent {
    constructor(noteService, archivedNoteService, router) {
        this.noteService = noteService;
        this.archivedNoteService = archivedNoteService;
        this.router = router;
    }
    ngOnInit() {
        this.archiveNote();
    }
    archiveNote() {
        this.id = this.archivedNoteService.getId();
        this.noteService.findNoteById(this.id).subscribe(data => {
            //get note to archive
            this.note = data;
            //create archived note
            this.archivedNote.noteId = data.noteId;
            this.archivedNote.noteTitle = data.noteTitle;
            this.archivedNote.noteContent = data.noteContent;
            this.archivedNote.isArchive = true;
            //save archived note
            this.archivedNoteService.createArchivedNote(this.archivedNote);
            //delete note from list.
            this.noteService.deleteNote(data.noteId);
            this.router.navigate(['/archivedlist']);
        });
    }
};
ArchivedNotesComponent.ctorParameters = () => [
    { type: _services_note_note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"] },
    { type: _services_note_archivednote_service__WEBPACK_IMPORTED_MODULE_3__["ArchivedNoteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ArchivedNotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-archived-notes',
        template: __webpack_require__(/*! raw-loader!./archived-notes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/note/archived-notes/archived-notes.component.html"),
        styles: [__webpack_require__(/*! ./archived-notes.component.css */ "./src/app/components/note/archived-notes/archived-notes.component.css")]
    })
], ArchivedNotesComponent);



/***/ }),

/***/ "./src/app/components/note/archivednote-list/archivednote-list.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/note/archivednote-list/archivednote-list.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90ZS9hcmNoaXZlZG5vdGUtbGlzdC9hcmNoaXZlZG5vdGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/note/archivednote-list/archivednote-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/note/archivednote-list/archivednote-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ArchivedNoteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivedNoteListComponent", function() { return ArchivedNoteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_note_archivednote_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/note/archivednote.service */ "./src/app/services/note/archivednote.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ArchivedNoteListComponent = class ArchivedNoteListComponent {
    constructor(archivedNoteService, router) {
        this.archivedNoteService = archivedNoteService;
        this.router = router;
    }
    ngOnInit() {
        this.getNotes();
    }
    getNotes() {
        this.archivedNoteService.getAll().subscribe(data => {
            this.notes = data;
        });
    }
    deleteNote(id) {
        this.archivedNoteService.deleteArchivedNote(id).subscribe(data => {
            console.log(data);
            this.getNotes();
            alert('Note Deleted');
        });
    }
    archiveNote(id) {
    }
    editNote(id) {
        this.router.navigate(['/edit']);
        this.archivedNoteService.saveId(id);
    }
};
ArchivedNoteListComponent.ctorParameters = () => [
    { type: _services_note_archivednote_service__WEBPACK_IMPORTED_MODULE_2__["ArchivedNoteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ArchivedNoteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-archivednote-list',
        template: __webpack_require__(/*! raw-loader!./archivednote-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/note/archivednote-list/archivednote-list.component.html"),
        styles: [__webpack_require__(/*! ./archivednote-list.component.css */ "./src/app/components/note/archivednote-list/archivednote-list.component.css")]
    })
], ArchivedNoteListComponent);



/***/ }),

/***/ "./src/app/components/note/create-note/create-note.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/note/create-note/create-note.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90ZS9jcmVhdGUtbm90ZS9jcmVhdGUtbm90ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/note/create-note/create-note.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/note/create-note/create-note.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreateNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNoteComponent", function() { return CreateNoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_note_note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/note/note */ "./src/app/model/note/note.ts");
/* harmony import */ var _services_note_note_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/note/note.service */ "./src/app/services/note/note.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let CreateNoteComponent = class CreateNoteComponent {
    constructor(noteService, router) {
        this.noteService = noteService;
        this.router = router;
        this.note = new _model_note_note__WEBPACK_IMPORTED_MODULE_2__["Note"]();
        this.submitted = false;
    }
    ngOnInit() {
    }
    newNote() {
        this.submitted = false;
        this.note = new _model_note_note__WEBPACK_IMPORTED_MODULE_2__["Note"]();
    }
    save() {
        this.noteService.createNote(this.note).subscribe(data => console.log(data), error1 => console.log(error1));
        this.note = new _model_note_note__WEBPACK_IMPORTED_MODULE_2__["Note"]();
    }
    onSubmit() {
        this.submitted = true;
        this.save();
        this.router.navigate(['/notes']);
    }
    cancel() {
        this.router.navigate(['/notes']);
    }
};
CreateNoteComponent.ctorParameters = () => [
    { type: _services_note_note_service__WEBPACK_IMPORTED_MODULE_3__["NoteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CreateNoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-note',
        template: __webpack_require__(/*! raw-loader!./create-note.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/note/create-note/create-note.component.html"),
        styles: [__webpack_require__(/*! ./create-note.component.css */ "./src/app/components/note/create-note/create-note.component.css")]
    })
], CreateNoteComponent);



/***/ }),

/***/ "./src/app/components/note/edit-note/edit-note.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/note/edit-note/edit-note.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90ZS9lZGl0LW5vdGUvZWRpdC1ub3RlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/note/edit-note/edit-note.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/note/edit-note/edit-note.component.ts ***!
  \******************************************************************/
/*! exports provided: EditNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNoteComponent", function() { return EditNoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_model_note_note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/note/note */ "./src/app/model/note/note.ts");
/* harmony import */ var src_app_services_note_note_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/note/note.service */ "./src/app/services/note/note.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let EditNoteComponent = class EditNoteComponent {
    constructor(noteService, router) {
        this.noteService = noteService;
        this.router = router;
        this._note = new src_app_model_note_note__WEBPACK_IMPORTED_MODULE_2__["Note"]();
        this.submitted = false;
    }
    ngOnInit() {
        this.getNoteToEdit();
    }
    getNoteToEdit() {
        this.id = this.noteService.getId();
        this.noteService.findNoteById(this.id).subscribe(data => {
            this.note = data;
        });
    }
    update() {
        this.noteService.updateNote(this.note).subscribe(data => console.log(data), error1 => console.log(error1));
        this.router.navigate(['/notes']);
    }
    onSubmit() {
        this.submitted = true;
        this.update();
    }
    cancel() {
        this.router.navigate(['/notes']);
    }
};
EditNoteComponent.ctorParameters = () => [
    { type: src_app_services_note_note_service__WEBPACK_IMPORTED_MODULE_3__["NoteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
EditNoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-note',
        template: __webpack_require__(/*! raw-loader!./edit-note.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/note/edit-note/edit-note.component.html"),
        styles: [__webpack_require__(/*! ./edit-note.component.css */ "./src/app/components/note/edit-note/edit-note.component.css")]
    })
], EditNoteComponent);



/***/ }),

/***/ "./src/app/components/note/note-details/note-details.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/note/note-details/note-details.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90ZS9ub3RlLWRldGFpbHMvbm90ZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/note/note-details/note-details.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/note/note-details/note-details.component.ts ***!
  \************************************************************************/
/*! exports provided: NoteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteDetailsComponent", function() { return NoteDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_note_note_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/note/note.service */ "./src/app/services/note/note.service.ts");
/* harmony import */ var _note_list_note_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../note-list/note-list.component */ "./src/app/components/note/note-list/note-list.component.ts");




let NoteDetailsComponent = class NoteDetailsComponent {
    constructor(noteService, noteList) {
        this.noteService = noteService;
        this.noteList = noteList;
    }
    ngOnInit() {
    }
};
NoteDetailsComponent.ctorParameters = () => [
    { type: _services_note_note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"] },
    { type: _note_list_note_list_component__WEBPACK_IMPORTED_MODULE_3__["NoteListComponent"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NoteDetailsComponent.prototype, "note", void 0);
NoteDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-note-details',
        template: __webpack_require__(/*! raw-loader!./note-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/note/note-details/note-details.component.html"),
        styles: [__webpack_require__(/*! ./note-details.component.css */ "./src/app/components/note/note-details/note-details.component.css")]
    })
], NoteDetailsComponent);



/***/ }),

/***/ "./src/app/components/note/note-list/note-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/note/note-list/note-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90ZS9ub3RlLWxpc3Qvbm90ZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/note/note-list/note-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/note/note-list/note-list.component.ts ***!
  \******************************************************************/
/*! exports provided: NoteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteListComponent", function() { return NoteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_note_note_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/note/note.service */ "./src/app/services/note/note.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_note_archivednote_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/note/archivednote.service */ "./src/app/services/note/archivednote.service.ts");
/* harmony import */ var src_app_model_note_archivednote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/note/archivednote */ "./src/app/model/note/archivednote.ts");






let NoteListComponent = class NoteListComponent {
    constructor(noteService, archivedNoteService, router) {
        this.noteService = noteService;
        this.archivedNoteService = archivedNoteService;
        this.router = router;
    }
    ngOnInit() {
        this.getNotes();
        this.setActive();
    }
    getNotes() {
        this.noteService.getAll().subscribe(data => {
            this.notes = data;
        });
    }
    deleteNote(id) {
        this.noteService.deleteNote(id).subscribe(data => {
            console.log(data);
            this.getNotes();
        });
    }
    archiveNote(id) {
        //get note
        this.noteService.findNoteById(id).subscribe(data => {
            this.note = data;
            //do the exchange
            this.noteToArchive = new src_app_model_note_archivednote__WEBPACK_IMPORTED_MODULE_5__["ArchivedNote"](this.note.noteId, this.note.noteTitle, this.note.noteContent, true);
            this.archivedNoteService.createArchivedNote(this.noteToArchive).subscribe(data => console.log(data), error1 => console.log(error1));
            //delete from notes
            this.noteService.deleteNote(this.note.noteId).subscribe(data => console.log(data), error1 => console.log(error1));
            this.getNotes();
        });
        this.router.navigate(['/archivedlist']);
    }
    editNote(id) {
        this.router.navigate(['/edit']);
        this.noteService.saveId(id);
    }
    setActive() {
        document.getElementById('notesLink').classList.add('active');
        document.getElementById('addLink').classList.remove('active');
        document.getElementById('archivedLink').classList.remove('active');
    }
};
NoteListComponent.ctorParameters = () => [
    { type: _services_note_note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"] },
    { type: _services_note_archivednote_service__WEBPACK_IMPORTED_MODULE_4__["ArchivedNoteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NoteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-note-list',
        template: __webpack_require__(/*! raw-loader!./note-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/note/note-list/note-list.component.html"),
        styles: [__webpack_require__(/*! ./note-list.component.css */ "./src/app/components/note/note-list/note-list.component.css")]
    })
], NoteListComponent);



/***/ }),

/***/ "./src/app/components/site-sections/footer/footer.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/site-sections/footer/footer.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS1zZWN0aW9ucy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/site-sections/footer/footer.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/site-sections/footer/footer.component.ts ***!
  \*********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/site-sections/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/site-sections/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/site-sections/nav/nav.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/site-sections/nav/nav.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS1zZWN0aW9ucy9uYXYvbmF2LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/site-sections/nav/nav.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/site-sections/nav/nav.component.ts ***!
  \***************************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavComponent = class NavComponent {
    constructor() { }
    ngOnInit() {
    }
    changeLink1() {
        document.getElementById('notesLink').classList.add('active');
        document.getElementById('addLink').classList.remove('active');
        document.getElementById('archivedLink').classList.remove('active');
    }
    changeLink2() {
        document.getElementById('addLink').classList.add('active');
        document.getElementById('notesLink').classList.remove('active');
        document.getElementById('archivedLink').classList.remove('active');
    }
    changeLink3() {
        document.getElementById('addLink').classList.remove('active');
        document.getElementById('notesLink').classList.remove('active');
        document.getElementById('archivedLink').classList.add('active');
    }
};
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/site-sections/nav/nav.component.html"),
        styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/components/site-sections/nav/nav.component.css")]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/model/note/archivednote.ts":
/*!********************************************!*\
  !*** ./src/app/model/note/archivednote.ts ***!
  \********************************************/
/*! exports provided: ArchivedNote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivedNote", function() { return ArchivedNote; });
class ArchivedNote {
    constructor(noteId, noteTitle, noteContent, isArchive) {
        this.noteId = noteId;
        this.noteTitle = noteTitle;
        this.noteContent = noteContent;
        this.isArchive = isArchive;
    }
}
ArchivedNote.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: String },
    { type: Boolean }
];


/***/ }),

/***/ "./src/app/model/note/note.ts":
/*!************************************!*\
  !*** ./src/app/model/note/note.ts ***!
  \************************************/
/*! exports provided: Note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
class Note {
}


/***/ }),

/***/ "./src/app/services/note/archivednote.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/note/archivednote.service.ts ***!
  \*******************************************************/
/*! exports provided: ArchivedNoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivedNoteService", function() { return ArchivedNoteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ArchivedNoteService = class ArchivedNoteService {
    constructor(http) {
        this.http = http;
        this.baseURL = '//localhost:8080/api/archivednotes';
    }
    //Create New ArchivedNote
    createArchivedNote(note) {
        return this.http.post(this.baseURL + '/addArchived', note);
    }
    //Read/Find by ID
    findArchivedNoteById(id) {
        return this.http.get(this.baseURL + '/findArchived/' + id);
    }
    //Update Existing ArchivedNote
    updateArchivedNote(note) {
        return this.http.put(this.baseURL + '/updateArchived', note);
    }
    //Delete Existing ArchivedNote
    deleteArchivedNote(id) {
        return this.http.delete(this.baseURL + '/deleteArchived/' + id);
    }
    //Get all ArchivedNotes
    getAll() {
        return this.http.get(this.baseURL + '/getAllArchived');
    }
    saveId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
};
ArchivedNoteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ArchivedNoteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ArchivedNoteService);



/***/ }),

/***/ "./src/app/services/note/note.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/note/note.service.ts ***!
  \***********************************************/
/*! exports provided: NoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteService", function() { return NoteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let NoteService = class NoteService {
    constructor(http) {
        this.http = http;
        this.baseURL = '//localhost:8080/api/notes';
    }
    //Create New Note
    createNote(note) {
        return this.http.post(this.baseURL + '/add', note);
    }
    //Read/Find by ID
    findNoteById(id) {
        return this.http.get(this.baseURL + '/find/' + id);
    }
    //Update Existing Note
    updateNote(note) {
        return this.http.put(this.baseURL + '/update', note);
    }
    //Delete Existing Note
    deleteNote(id) {
        return this.http.delete(this.baseURL + '/delete/' + id);
    }
    //Get all Notes
    getAll() {
        return this.http.get(this.baseURL + '/getAll');
    }
    saveId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
};
NoteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
NoteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NoteService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mkkhanox\IdeaProjects\Note\angular-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map