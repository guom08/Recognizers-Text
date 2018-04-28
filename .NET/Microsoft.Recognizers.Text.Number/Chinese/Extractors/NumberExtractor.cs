﻿using System.Collections.Immutable;
using System.Text.RegularExpressions;

namespace Microsoft.Recognizers.Text.Number.Chinese
{
    public class NumberExtractor : BaseNumberExtractor
    {
        internal sealed override ImmutableDictionary<Regex, string> Regexes { get; }

        protected sealed override string ExtractType { get; } = Constants.SYS_NUM;

        public NumberExtractor(ChineseNumberExtractorMode mode = ChineseNumberExtractorMode.Default)
        {
            var builder = ImmutableDictionary.CreateBuilder<Regex, string>();

            // Add Cardinal
            var cardExtractChs = new CardinalExtractor(mode);
            builder.AddRange(cardExtractChs.Regexes);
            
            // Add Fraction
            var fracExtractChs = new FractionExtractor();
            builder.AddRange(fracExtractChs.Regexes);

            Regexes = builder.ToImmutable();
        }
    }

    // These modes only apply to ChineseNumberExtractor.
    // The default more urilizes an allow list to avoid extracting numbers in ambiguous/undesired combinations of Chinese ideograms.
    // ExtractAll mode is to be used in cases where extraction should be more aggressive (e.g. in Units extraction).
    public enum ChineseNumberExtractorMode
    {
        Default, // Number extraction with an allow list that filters what numbers to extract.
        ExtractAll, // Extract all number-related terms aggressively.
    }
}