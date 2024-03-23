import React from 'react'
import { ActivityIndicator, FlatList, ScrollView, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../utils/colors';
import { useDispatch } from 'react-redux';
import { clearHeader, setHeader } from '../../store';
import { Button, SearchBar } from '@rneui/base';
import { Image } from '@rneui/themed';

function ItemSelectScreen() {
    const DATA = [
        { title: 'Breakfast', data: ['Eggs', 'Potato', 'Milk'] },
        { title: 'Lunch', data: ['Beef', 'Mutton', 'Etc', 'Cake', 'Pudding'] },
        { title: 'Dinner', data: ['Chiken', 'Beef', 'Milk'] },
    ];
    const dispatch = useDispatch();
    React.useEffect(() => {
        const setHeaderName = () => {
            dispatch(setHeader({ headerName: 'ITEMS' }));
        }
        setHeaderName();
        return async () => {
            await dispatch(clearHeader());
        }
    }, []);

    const renderItem = ({ item }) => {
        const itemClickHandle = () => {
            console.log(item);

        }
        return (
            <TouchableOpacity onPress={itemClickHandle} style={styles.row}>
                <View style={styles.itemContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?cs=srgb&dl=pizza-2619967.jpg&fm=jpg' }}
                        containerStyle={styles.item}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.itemText}>{item}</Text>
                        <Text style={styles.itemText}>500 /-</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    const renderFlatItem = ({ item }) => {

        return (
            <>
                <RenderSectionHeader header={item.title} />
                <FlatList
                    data={item.data}
                    renderItem={renderItem} //method to render the data in the way you want using styling u need
                    horizontal={false}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                />
            </>
        )
    }

    const RenderSectionHeader = ({ header }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 6, marginVertical: 10 }}>
            <Text style={{ textDecorationLine: 'underline', fontFamily: 'Lato-Regular', textAlign: 'center', color: COLORS.black, fontSize: 24 }}>{header}</Text>
        </View>
    );

    return (
        <View style={styles.container}>

            <FlatList
                ListHeaderComponent={
                    <SearchBar
                        placeholder="Type Here..."
                        onChangeText={() => { }}
                        value={'search'}
                        platform='android'
                        containerStyle={{ backgroundColor: COLORS.lightBackgroundColor, marginBottom: 2 }}
                    />
                }
                data={DATA}
                renderItem={renderFlatItem}
                keyExtractor={(item, index) => index.toString()}

            />

            <Button
                type='clear' containerStyle={{ backgroundColor: COLORS.itemBackgroundColor, paddingVertical: 5, marginBottom: 20, marginTop: 10 }}>
                <Text style={{ color: COLORS.lightColor, fontSize: 16, fontFamily: 'Lato-Black' }}>
                    Next
                </Text>
            </Button>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.staffBackground,
        paddingHorizontal: 25,
        justifyContent: 'space-between'
    },
    sectionHeader: {
        backgroundColor: '#e0e0e0',
        padding: 8,
    },
    sectionHeaderText: {
        fontWeight: 'bold',
    },
    row: {
        flexBasis: '45.5%',
        margin: 8,
    },
    itemContainer: {
        flex: 1,
        backgroundColor: COLORS.itemBackgroundColor,
        padding: 8,
    },
    itemText: {
        textAlign: 'center',
        color: 'gold',
        fontFamily: 'Lato-Black',
        fontSize: 18,

    },
    item: {
        aspectRatio: 1,
        width: '100%',
        flex: 1,
    },
})

export default ItemSelectScreen