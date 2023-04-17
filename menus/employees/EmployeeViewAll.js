import React, {Component} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {Card, Button} from 'react-native-elements';

export default class EmployeeViewAll extends Component {
  // membuat nilai awal yg dijalankan pertama kali
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataEmployeesArray: [], // diawal masih kosong
    };
  }

  // function untuk mengambil seluruh data employees
  getAllEmployees = () => {
    fetch('http://192.168.1.12/my-react-crud/LihatSemuaPegawai.php', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          isLoading: false,
          dataEmployeesArray: responseJson,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      this.getAllEmployees();
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            padding: 6,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View>
        <FlatList
          data={this.state.dataEmployeesArray}
          keyExtractor={item => item.pegawai_id}
          renderItem={({item}) => (
            <Card>
              <View>
                <Text>
                  ID: {item.pegawai_id} | Name: {item.pegawai_nama}
                </Text>
              </View>
            </Card>
          )}
        />
      </View>
    );
  }
}
