import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  updateText,
  replaceText,
} from 'actions/EditorActions';

import styles from './Editor.scss';
import 'assets/styles/codemirror.css';

import Layout from 'components/Layout';
import Flex from 'components/Flex';
import MarkdownEditor from 'components/MarkdownEditor';

import SaveAction from './components/SaveAction';
import MoreAction from './components/MoreAction';

class Editor extends Component {
  static propTypes = {
    updateText: React.PropTypes.func.isRequired,
    replaceText: React.PropTypes.func.isRequired,
    text: React.PropTypes.string,
    title: React.PropTypes.string,
  }

  render() {
    return (
      <Layout
        actions={(
          <Flex direction="row" align="center">
            <SaveAction />
            <MoreAction />
          </Flex>
        )}
        title={ this.props.title }
      >
        <Flex flex={ true } align="center">
          <MarkdownEditor
            onChange={ this.props.updateText }
            text={ this.props.text }
            replaceText={this.props.replaceText}
          />
        </Flex>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.editor.text,
    title: state.editor.title,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateText,
    replaceText,
  }, dispatch)
};

Editor = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Editor);

export default Editor;
