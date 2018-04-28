﻿using System.Collections.Generic;
using System.Collections.Immutable;
using System.Text.RegularExpressions;

using Microsoft.Recognizers.Definitions.Chinese;

namespace Microsoft.Recognizers.Text.Number.Chinese
{
    public class IntegerExtractor : BaseNumberExtractor
    {
        internal sealed override ImmutableDictionary<Regex, string> Regexes { get; }

        protected sealed override string ExtractType { get; } = Constants.SYS_NUM_INTEGER;
        
        public IntegerExtractor(ChineseNumberExtractorMode mode = ChineseNumberExtractorMode.Default)
        {
            var regexes = new Dictionary<Regex, string>()
            {
                {
                    // 123456,  －１２３４５６
                    new Regex(NumbersDefinitions.NumbersSpecialsChars, RegexOptions.IgnoreCase | RegexOptions.Singleline),
                              "IntegerNum"
                },
                {
                    //15k,  16 G
                    new Regex(NumbersDefinitions.NumbersSpecialsCharsWithSuffix, RegexOptions.Singleline),
                              "IntegerNum"
                },
                {
                    //1,234,  ２，３３２，１１１
                    new Regex(NumbersDefinitions.DottedNumbersSpecialsChar, RegexOptions.IgnoreCase | RegexOptions.Singleline),
                              "IntegerNum"
                },
                {
                    //半百  半打
                    new Regex(NumbersDefinitions.NumbersWithHalfDozen, RegexOptions.Singleline),
                              "IntegerChs"
                },
                {
                    //一打  五十打
                    new Regex(NumbersDefinitions.NumbersWithDozen, RegexOptions.Singleline),
                              "IntegerChs"
                }
            };

            switch (mode)
            {
                case ChineseNumberExtractorMode.Default:
                    // 一百五十五, 负一亿三百二十二. 
                    // Uses an allow list to avoid extracting "四" from "四川"
                    regexes.Add(new Regex(NumbersDefinitions.NumbersWithAllowListRegex, RegexOptions.Singleline), 
                                "IntegerChs");
                    break;

                case ChineseNumberExtractorMode.ExtractAll:
                    // 一百五十五, 负一亿三百二十二, "四" from "四川". 
                    // Uses no allow lists and extracts all potential integers (useful in Units, for example).
                    regexes.Add(new Regex(NumbersDefinitions.NumbersAggressiveRegex, RegexOptions.Singleline), 
                                "IntegerChs");
                    break;
            }

            Regexes = regexes.ToImmutableDictionary();
        }
    }
}