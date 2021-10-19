import {Resumable} from './src/resumable';

let resumable: Resumable = new Resumable({chunkSize: 123});
let resumableNoOpts: Resumable = new Resumable();

resumable.addFile(new File([], 'test.tmp'), {});
resumable.addFiles([new File([], 'test.tmp')], {});
resumable.assignBrowse(document, true);
resumable.assignBrowse([document], true);
resumable.assignDrop(document);
resumable.assignDrop([document]);
resumable.cancel();
let files: any[] = resumable.files;
resumable.fire();
let {} = resumable.getFromUniqueIdentifier('test');
let size:number = resumable.getSize();
resumable.handleChangeEvent({});
resumable.handleDropEvent({});
let isUploading: boolean = resumable.isUploading();
resumable.on('test', function() {});
let opts: Object = resumable.opts;
resumable.pause();
let progress:number = resumable.progress();
resumable.removeFile('TODO');
let support: boolean = resumable.support;
resumable.unAssignDrop({});
resumable.upload();
resumable.uploadNextChunk();
let version:number = resumable.version;
