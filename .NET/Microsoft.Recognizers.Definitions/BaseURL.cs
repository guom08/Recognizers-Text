﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
//     
//     Generation parameters:
//     - DataFilename: Patterns\Base-URL.yaml
//     - Language: NULL
//     - ClassName: BaseURL
// </auto-generated>
//------------------------------------------------------------------------------
namespace Microsoft.Recognizers.Definitions
{
	using System;
	using System.Collections.Generic;

	public static class BaseURL
	{
		public static readonly string URLRegex = $@"(?<=\s|[\'""\(\[]|^)((((https?|ftp):\/\/)?(((www\.)?[-a-zA-Z0-9:%._\+~#=]{{2,256}}\.[a-zA-Z]{{2,6}})|localhost))|(((https?|ftp):\/\/){BaseIp.Ipv4Regex}))\b(:\d{{1,5}})?([/#][-a-zA-Z0-9:%_\+.~#?!&//=]*)?";
	}
}