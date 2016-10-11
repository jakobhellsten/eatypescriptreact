interface IDocument {
  id: string,
  title: string,
  completed: boolean
}

interface ITodoItemProps {
  key : string,
  todo : IDocument;
}

interface ITodoItemState {
  editText : string
}

interface IDocumentModel {
  key : any;
  documents : Array<IDocument>;
  menuItems : Array<IMenuItem>
  onChanges : Array<any>;
  subscribe(onChange);
}

interface IMenuModel {
  
}

interface IMenuItem{
  key : string,
  title : string
}

interface IAppProps {
  model : IDocumentModel;
}

interface IAppState {
  editing? : string;
  nowShowing? : string
}
