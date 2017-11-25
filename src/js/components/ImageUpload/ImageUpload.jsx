import React from 'react';
import PropTypes from 'prop-types';
import { Upload, Dialog, Button } from 'element-react';

export default class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogVisible: false,
            dialogImageUrl: '',
            fileList: [],
            requestHeader: {
                Authorization: 'Bearer ' + localStorage.getItem('token') ? localStorage.getItem('token'): null,
            }
        }
    }
    handleRemove(file, fileList) {
        console.log(file, fileList);
    }  
    handlePreview(file) {
        console.log(file);
    }
    handleBeforeUpload(file) {
        console.log('UPLOAD', file);
    }
    submitUpload() {
        console.log('AAAA', this.state.fileList);
        this.refs.upload.submit();
    }
    handleSuccess(res) {
        console.log('UPLOAD', res);
        this.props.sendToNav(res);
    }
    render() {
        return (
            <div>
                 <Upload
                    className="upload-demo"
                    ref="upload"
                    header={this.state.requestHeader}
                    action="http://ehackathon.usach.cl/api/img/analyze/"
                    onPreview={file => this.handlePreview(file)}
                    onRemove={(file, fileList) => this.handleRemove(file, fileList)}
                    fileList={this.state.fileList}
                    onSuccess={(response, file, fileList) => this.handleSuccess(response)}
                    autoUpload={false}
                    tip={<div className="el-upload__tip">Archivos jpg/png</div>}
                    trigger={<Button size="small" type="primary">Selecciona la imagen</Button>}
                >
                <Button style={{ marginLeft: '10px'}} size="small" type="success" onClick={() => this.submitUpload()}>Subir imagen</Button>
               </Upload>
            </div>
        );
    }
}

ImageUpload.propTypes = {
    sendToNav: PropTypes.func,
};