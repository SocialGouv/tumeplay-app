const BaseRemoteApi 	= "http://10.0.2.2:5000/api/";

const QuizzRemoteApi 	= BaseRemoteApi + "contents";
const BoardingRemoteApi = BaseRemoteApi + "contents";

const RemoteApi 	= {
	fetch : async(targetUrl) => 
	{
		try
		{
			const response 	 = await fetch( targetUrl );
			const jsonParsed = await response.json();
			
			return jsonParsed;
		}
		catch(e)
		{
			throw Error(e);
		}
	},
	fetchBoarding : async() => 
	{
		try
		{
			const contents = await RemoteApi.fetch(BoardingRemoteApi);
			
			console.log(contents);
			
			return contents.contents;
		}
		catch(e)
		{
			throw Error(e);
		}
	},
	fetchQuizz : async() => 
	{
		try
		{
			const questions = await RemoteApi.fetch(QuizzRemoteApi);
			
			return questions;
		}
		catch(e)
		{
			throw Error(e);
		}
	}
}

export default RemoteApi;