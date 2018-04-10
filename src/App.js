import React, { PureComponent } from 'react';
import {LocalLoadForm} from './Components/LoadForms/LocalLoadForm';
import {LoadFromUrlForm} from './Components/LoadForms/LoadFromUrlForm';
import {Visualizer} from './Components/Visualizer';
import './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLocalLoad: true,
      dataToVisualize: null
    };
  }

  toggleLocalLoad = () => this.setState({isLocalLoad: true});

  toggleLoadFromUrl = () => this.setState({isLocalLoad: false});

  cacheDataFromJson = data => this.setState({dataToVisualize: data});

  render() {
    const {isLocalLoad, dataToVisualize} = this.state;

    return (
      <div className="App">
        <div className="links">
          <a
            onClick={this.toggleLocalLoad}
            className={isLocalLoad ? 'active' : ''}
          >
            load local json
          </a>
          <a
            onClick={this.toggleLoadFromUrl}
            className={!isLocalLoad ? 'active' : ''}
          >
            load json from url
          </a>
        </div>
        <div className="upload-form">
          {isLocalLoad
            ? <LocalLoadForm cacheDataFromJson={this.cacheDataFromJson} />
            : <LoadFromUrlForm cacheDataFromJson={this.cacheDataFromJson} />
          }
        </div>
        {dataToVisualize && <Visualizer data={dataToVisualize} />}
      </div>
    );
  }
}

export default App;
