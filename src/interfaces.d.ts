interface IBreadCrumbItem {
  updating? : boolean;
}

interface IDocument {
  id: string;
  title: string;
}

interface IDocumentModel {
  id : any;
  documents : Array<IDocument>;
  menuItems : Array<IMenuItem>;
  onChanges : Array<any>;
  subscribe(onChange);
}

interface IMenuModel {
  
}

interface IMenuItem{
  id : string;
  title : string;
}

interface INavigationItem{
  id : string;
  title : string;
}

interface IAppProps {
  model : IDocumentModel;
}

interface IDocumentProps {
  id : string;
  document : IDocument;
}

interface IDocumentListProps {
  documents : Array<IDocument>;
}

interface IDocumentListItemProps{
  handleOnClick : any;
  //subscribe(onClick); 
  document : IDocument;
}

interface INavigationProps {
  menuItems : Array<IMenuItem>;
  handleOnClick : any;  
}

interface INavigationItemProps {
  id : string;  
  title : string;
  //navigationItem : INavigationItem;
  handleOnClick : any;
}

interface IAppState {
  updating? : boolean;
  currentOrganization? : string;
  currentSpecialty? : string;
  menuItems? : Array<IMenuItem>;
  documents? : Array<IDocument>;
}

interface IDocumentListState {
  updating? : boolean;
}

interface IDocumentListItemState {
  updating? : boolean;
}

interface IBreadCrumbState {
  updating? : boolean;
}

interface IBreadCrumbItemState {
  updating? : boolean;
}




