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

interface IOrganization{
  parentId : string;
  id : string;
  title : string;
  children : Array<IOrganization>;
}

interface ISpecialty{
  parentId : string;
  id : string;
  title : string;
  isTermInUse : boolean;
  hasUsedChildNodes : boolean;
  children : Array<ISpecialty>;
}


interface IMenuModel {
  
}

//Abstraction for specialties and organizations when it comes to rendering menus
interface IMenuItem{
  id : string;
  title : string;
}

//Abstraction for specialties and organizations when it comes to rendering menus
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
  handleDocumentProperties : any;
}

interface IDocumentListItemProps{
  key : string;
  handleOnClick : any;
  handleModalOpen : any;
  //subscribe(onClick); 
  document : IDocument;
}

interface INavigationProps {
  menuItems : Array<IMenuItem>;
  currentSpecialty : ISpecialty;
  handleOnClick : any;  
}

interface INavigationItemProps {
  id : string;
  key : string;  
  title : string;
  //navigationItem : INavigationItem;
  handleOnClick : any;
}

interface IModalProps{
  isOpen? : boolean;
  style? : string;
  bg? : string;
  handleOnClose : any;  
}

interface IAppState {
  updating? : boolean;
  currentOrganizationId? : string;
  currentSpecialtyId? : string;
  currentSpecialty? : ISpecialty;
  currentOrganization? : IOrganization;
  menuItems? : Array<IMenuItem>;
  documents? : Array<IDocument>;
  activeBreadCrumbs? : Array<IMenuItem>;
  isModalOpen? : boolean;
}

interface IDocumentListState {
  updating? : boolean;
  isModalOpen : boolean;
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




