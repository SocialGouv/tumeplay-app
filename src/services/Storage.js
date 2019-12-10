import {AsyncStorage} from 'react-native';

const Storage = 
{
	get : async(key : string) =>
	{
		try 
		{
		    const localValue =  AsyncStorage.getItem(key);

		    return localValue;
		} 
		catch(e) 
		{
			throw Error(e);
		}
	},
	
	set : async(key : string, value : string) => 
	{
	    try 
		{
			await AsyncStorage.setItem(key, value);
		} 
		catch(e) 
		{
			throw Error(e);
		}
	},
	
	clear : async(): Promise<null> => 
	{
		try 
		{
			await AsyncStorage.clear();
		} 
		catch(e) 
		{
			throw Error(e);
		}	    
	},
	
	remove : async( key: string ) => 
	{
		try 
		{
			await AsyncStorage.remove(key);
		} 
		catch(e) 
		{
			throw Error(e);
		}
	}
}
export default Storage;