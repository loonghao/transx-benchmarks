window.BENCHMARK_DATA = {
  "lastUpdate": 1772859187173,
  "repoUrl": "https://github.com/loonghao/transx",
  "entries": {
    "TransX Performance Benchmarks (Python 3.11)": [
      {
        "commit": {
          "author": {
            "email": "hal.long@outlook.com",
            "name": "longhao",
            "username": "loonghao"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "513701dab90bb14a1f7d5e5e17f2e3f56191b915",
          "message": "chore(workflows): Update benchmark.yml and add index page generation\n\nUpdate benchmark.yml to improve auto-push logic and add a new workflow step to generate an index page for the benchmarks.\n\nSigned-off-by: longhao <hal.long@outlook.com>",
          "timestamp": "2024-12-12T23:34:21+08:00",
          "tree_id": "856183d03a263638286260630f9c521986018bca",
          "url": "https://github.com/loonghao/transx/commit/513701dab90bb14a1f7d5e5e17f2e3f56191b915"
        },
        "date": 1734017747466,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3185.8657064340023,
            "unit": "iter/sec",
            "range": "stddev: 0.00026697867951148665",
            "extra": "mean: 313.8864259031553 usec\nrounds: 803"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 94247.2903952182,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024883543773778616",
            "extra": "mean: 10.610384614842324 usec\nrounds: 2080"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 87995.60740534202,
            "unit": "iter/sec",
            "range": "stddev: 0.00000189244134965235",
            "extra": "mean: 11.364203617501165 usec\nrounds: 33671"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 88230.6727725874,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019875197274630785",
            "extra": "mean: 11.333926950522955 usec\nrounds: 37454"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1235986.5469665886,
            "unit": "iter/sec",
            "range": "stddev: 7.431054907530836e-7",
            "extra": "mean: 809.070294862224 nsec\nrounds: 3528"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 95156.36746953768,
            "unit": "iter/sec",
            "range": "stddev: 0.000003635448553028114",
            "extra": "mean: 10.509018225397572 usec\nrounds: 38023"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 1009.1264593041715,
            "unit": "iter/sec",
            "range": "stddev: 0.00004631138517121122",
            "extra": "mean: 990.9560796667006 usec\nrounds: 954"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 2851.581568514515,
            "unit": "iter/sec",
            "range": "stddev: 0.000032639864619137974",
            "extra": "mean: 350.6825864781185 usec\nrounds: 2544"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 76429.77728018849,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022140123034513764",
            "extra": "mean: 13.083905718239114 usec\nrounds: 37038"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 23060.954512548455,
            "unit": "iter/sec",
            "range": "stddev: 0.000005648306226406319",
            "extra": "mean: 43.36333951206821 usec\nrounds: 14026"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1762.7871538059596,
            "unit": "iter/sec",
            "range": "stddev: 0.00006690993916012081",
            "extra": "mean: 567.2834623516186 usec\nrounds: 1421"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hal.long@outlook.com",
            "name": "longhao",
            "username": "loonghao"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "40a480d4c7ec571c8fccc07ce06394a33a4482db",
          "message": "tests(tests/benchmarks): Add new performance benchmarks for translation operations\n\n- Added benchmarks for translation with nested parameters\n- Added benchmarks for translation with large number of parameters\n- Added benchmarks for frequent locale switches\n- Added benchmarks for memory usage with large number of translations\n\nSigned-off-by: longhao <hal.long@outlook.com>",
          "timestamp": "2024-12-12T23:49:00+08:00",
          "tree_id": "2f3177db43da8ad71aea4f0fc23e07eeaeb8b095",
          "url": "https://github.com/loonghao/transx/commit/40a480d4c7ec571c8fccc07ce06394a33a4482db"
        },
        "date": 1734018612620,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3237.269223449332,
            "unit": "iter/sec",
            "range": "stddev: 0.00024408022357937068",
            "extra": "mean: 308.90232815869837 usec\nrounds: 902"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 93992.48638594145,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024333732622386486",
            "extra": "mean: 10.639148281426579 usec\nrounds: 1949"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 87510.9232880335,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026137394155533014",
            "extra": "mean: 11.42714489148514 usec\nrounds: 22472"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 86337.96750767632,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033683374761257374",
            "extra": "mean: 11.582389867019858 usec\nrounds: 35843"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1322519.8042941499,
            "unit": "iter/sec",
            "range": "stddev: 8.138100896772917e-8",
            "extra": "mean: 756.1323442968902 nsec\nrounds: 3506"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 92997.54523612537,
            "unit": "iter/sec",
            "range": "stddev: 0.000002430950338447476",
            "extra": "mean: 10.752972000077534 usec\nrounds: 25000"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 979.6394543901188,
            "unit": "iter/sec",
            "range": "stddev: 0.00006745316729543439",
            "extra": "mean: 1.020783713353559 msec\nrounds: 921"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 857.7797899593123,
            "unit": "iter/sec",
            "range": "stddev: 0.0000546404704479106",
            "extra": "mean: 1.1658003740650427 msec\nrounds: 802"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 58743.88100319399,
            "unit": "iter/sec",
            "range": "stddev: 0.000003470728584555352",
            "extra": "mean: 17.023049599763908 usec\nrounds: 31250"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 1114.6258343983832,
            "unit": "iter/sec",
            "range": "stddev: 0.00009385774610891604",
            "extra": "mean: 897.1620512813143 usec\nrounds: 780"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1754.3593423951984,
            "unit": "iter/sec",
            "range": "stddev: 0.00008543442029812486",
            "extra": "mean: 570.0086497870591 usec\nrounds: 1422"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 94742.76288923799,
            "unit": "iter/sec",
            "range": "stddev: 0.000002605600251678158",
            "extra": "mean: 10.554895904493321 usec\nrounds: 33671"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 75501.64561361274,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024021444372107265",
            "extra": "mean: 13.244744427394343 usec\nrounds: 24631"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 41051.81971937909,
            "unit": "iter/sec",
            "range": "stddev: 0.000005461345726269948",
            "extra": "mean: 24.35945609319569 usec\nrounds: 19268"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 938.2268362222809,
            "unit": "iter/sec",
            "range": "stddev: 0.00004806933801486037",
            "extra": "mean: 1.0658403292176606 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 98.01136972726738,
            "unit": "iter/sec",
            "range": "stddev: 0.0002289174045354638",
            "extra": "mean: 10.202897916666842 msec\nrounds: 96"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hal.long@outlook.com",
            "name": "longhao",
            "username": "loonghao"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "c129133837fd64ccc614941f230af18bfc467074",
          "message": "refactor(core): Add translation and parameter caching for improved performance\n\nSigned-off-by: longhao <hal.long@outlook.com>",
          "timestamp": "2024-12-13T00:21:43+08:00",
          "tree_id": "59f62ae9aedac103ec3c56e3f2d1bb54bb077a89",
          "url": "https://github.com/loonghao/transx/commit/c129133837fd64ccc614941f230af18bfc467074"
        },
        "date": 1734020578317,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3334.421466212755,
            "unit": "iter/sec",
            "range": "stddev: 0.00017990202139843493",
            "extra": "mean: 299.90209999931494 usec\nrounds: 1000"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1619847.3285384285,
            "unit": "iter/sec",
            "range": "stddev: 7.877482817733434e-8",
            "extra": "mean: 617.3421299538702 nsec\nrounds: 2122"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 572324.2385986925,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032757312177915886",
            "extra": "mean: 1.747261311959197 usec\nrounds: 23095"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 496237.3086067944,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032090640263395802",
            "extra": "mean: 2.0151648871535657 usec\nrounds: 25381"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1262085.455852962,
            "unit": "iter/sec",
            "range": "stddev: 1.2310220240731088e-7",
            "extra": "mean: 792.3393739801593 nsec\nrounds: 3642"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1630589.3689872879,
            "unit": "iter/sec",
            "range": "stddev: 9.632790825738284e-8",
            "extra": "mean: 613.2751868859978 nsec\nrounds: 28090"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 24305.717019695923,
            "unit": "iter/sec",
            "range": "stddev: 0.000003152625167474804",
            "extra": "mean: 41.142583828720575 usec\nrounds: 9931"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5573.758505196902,
            "unit": "iter/sec",
            "range": "stddev: 0.000030749117073722434",
            "extra": "mean: 179.41215053856615 usec\nrounds: 1860"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1629975.5061420917,
            "unit": "iter/sec",
            "range": "stddev: 1.387822274222399e-7",
            "extra": "mean: 613.5061516150329 nsec\nrounds: 22027"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 12930.116423526226,
            "unit": "iter/sec",
            "range": "stddev: 0.0000210889089852852",
            "extra": "mean: 77.33882412539684 usec\nrounds: 1973"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1845.191680613286,
            "unit": "iter/sec",
            "range": "stddev: 0.000049166031973924115",
            "extra": "mean: 541.9491159138709 usec\nrounds: 1527"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2051505.4570732145,
            "unit": "iter/sec",
            "range": "stddev: 1.2030881852960944e-7",
            "extra": "mean: 487.44691199848603 nsec\nrounds: 156250"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 223938.77893332968,
            "unit": "iter/sec",
            "range": "stddev: 0.00000860446054304739",
            "extra": "mean: 4.4655061743357845 usec\nrounds: 18383"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 54837.69242563433,
            "unit": "iter/sec",
            "range": "stddev: 0.000004197229441761541",
            "extra": "mean: 18.235632386539695 usec\nrounds: 11338"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 14247.667987479048,
            "unit": "iter/sec",
            "range": "stddev: 0.00001529346527589366",
            "extra": "mean: 70.18692468681942 usec\nrounds: 956"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2366.1926593286057,
            "unit": "iter/sec",
            "range": "stddev: 0.00004452624534500237",
            "extra": "mean: 422.6198555969422 usec\nrounds: 277"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "distinct": true,
          "id": "13c0565f3998741304d99a38c46f4a06bb1004e5",
          "message": "bump: version 0.6.0 → 0.6.1",
          "timestamp": "2024-12-12T16:22:08Z",
          "tree_id": "09ee9a0219ba87c70c96c5fc0f17b3cadc5bb0d4",
          "url": "https://github.com/loonghao/transx/commit/13c0565f3998741304d99a38c46f4a06bb1004e5"
        },
        "date": 1734020643210,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3257.2024411890375,
            "unit": "iter/sec",
            "range": "stddev: 0.00023457351184317938",
            "extra": "mean: 307.01192758376766 usec\nrounds: 939"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1599553.4077666167,
            "unit": "iter/sec",
            "range": "stddev: 1.3224895116141511e-7",
            "extra": "mean: 625.1744987972952 nsec\nrounds: 2149"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 567711.1372280775,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033796690187929207",
            "extra": "mean: 1.7614591901131769 usec\nrounds: 23095"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 497982.69359813555,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032533306666557305",
            "extra": "mean: 2.0081019136921747 usec\nrounds: 26179"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1278433.0239041238,
            "unit": "iter/sec",
            "range": "stddev: 1.2446761328266273e-7",
            "extra": "mean: 782.2075785762829 nsec\nrounds: 3642"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1643818.0856931314,
            "unit": "iter/sec",
            "range": "stddev: 4.023251165461912e-7",
            "extra": "mean: 608.3398209956673 nsec\nrounds: 21835"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 24897.778058843705,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031366436497322744",
            "extra": "mean: 40.1642266083579 usec\nrounds: 9426"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5718.258168802682,
            "unit": "iter/sec",
            "range": "stddev: 0.000030330381537037962",
            "extra": "mean: 174.8784280947191 usec\nrounds: 1794"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1600556.4789636354,
            "unit": "iter/sec",
            "range": "stddev: 3.0593022877514443e-7",
            "extra": "mean: 624.7827009812879 nsec\nrounds: 23585"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 13223.917702456467,
            "unit": "iter/sec",
            "range": "stddev: 0.000022090420515497068",
            "extra": "mean: 75.6205553074669 usec\nrounds: 2233"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1810.6901057888022,
            "unit": "iter/sec",
            "range": "stddev: 0.00007012541576300868",
            "extra": "mean: 552.2756195568671 usec\nrounds: 1493"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2033482.4670931143,
            "unit": "iter/sec",
            "range": "stddev: 1.4517181624500245e-7",
            "extra": "mean: 491.76721028298994 nsec\nrounds: 153847"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 230153.14960091023,
            "unit": "iter/sec",
            "range": "stddev: 0.0000090603257537732",
            "extra": "mean: 4.344932935890811 usec\nrounds: 12078"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 56444.963011164364,
            "unit": "iter/sec",
            "range": "stddev: 0.000003939002957822257",
            "extra": "mean: 17.716372669111465 usec\nrounds: 13889"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 14573.693208255954,
            "unit": "iter/sec",
            "range": "stddev: 0.000008625652005733042",
            "extra": "mean: 68.61678681650187 usec\nrounds: 971"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2368.086801113902,
            "unit": "iter/sec",
            "range": "stddev: 0.000023399230217894923",
            "extra": "mean: 422.2818181874159 usec\nrounds: 275"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hal.long@outlook.com",
            "name": "longhao",
            "username": "loonghao"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "5c332e1d5ae462437c64289535606d7a687943e3",
          "message": "feat: improve custom keyword extraction and gettext output stability",
          "timestamp": "2026-03-03T09:26:42+08:00",
          "tree_id": "00f4037f0df04d43e7da3ba37dcc021ce83ecdce",
          "url": "https://github.com/loonghao/transx/commit/5c332e1d5ae462437c64289535606d7a687943e3"
        },
        "date": 1772501273108,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2849.511065596414,
            "unit": "iter/sec",
            "range": "stddev: 0.00025674490179399125",
            "extra": "mean: 350.9373983745861 usec\nrounds: 738"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1640089.0848545088,
            "unit": "iter/sec",
            "range": "stddev: 8.740199090155157e-8",
            "extra": "mean: 609.7229773885784 nsec\nrounds: 1841"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 552787.8521809101,
            "unit": "iter/sec",
            "range": "stddev: 0.000003387455864134669",
            "extra": "mean: 1.809012256790208 usec\nrounds: 19418"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 451657.7027351317,
            "unit": "iter/sec",
            "range": "stddev: 0.000005314484849889577",
            "extra": "mean: 2.214066081336015 usec\nrounds: 10472"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1202333.0494254848,
            "unit": "iter/sec",
            "range": "stddev: 3.7478646865882385e-7",
            "extra": "mean: 831.716303962395 nsec\nrounds: 3257"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1582327.6015061014,
            "unit": "iter/sec",
            "range": "stddev: 3.200568603813999e-7",
            "extra": "mean: 631.9803807050913 nsec\nrounds: 22223"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 24971.743212254245,
            "unit": "iter/sec",
            "range": "stddev: 0.000003903409924276677",
            "extra": "mean: 40.04526201876349 usec\nrounds: 6469"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5609.678116872474,
            "unit": "iter/sec",
            "range": "stddev: 0.000033657471715828236",
            "extra": "mean: 178.2633475871381 usec\nrounds: 3274"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1559887.7808348397,
            "unit": "iter/sec",
            "range": "stddev: 5.155486184605974e-7",
            "extra": "mean: 641.071756754712 nsec\nrounds: 21740"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 13706.340689039733,
            "unit": "iter/sec",
            "range": "stddev: 0.000019032032874290343",
            "extra": "mean: 72.95893358317362 usec\nrounds: 2138"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1557.7722240617156,
            "unit": "iter/sec",
            "range": "stddev: 0.00006635148063191463",
            "extra": "mean: 641.9423742147698 usec\nrounds: 1272"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2016461.6392219854,
            "unit": "iter/sec",
            "range": "stddev: 1.9751618010212012e-7",
            "extra": "mean: 495.91818686151595 nsec\nrounds: 151516"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 221840.53681088917,
            "unit": "iter/sec",
            "range": "stddev: 0.000007962069858413985",
            "extra": "mean: 4.5077424278524125 usec\nrounds: 17036"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 55950.98001722615,
            "unit": "iter/sec",
            "range": "stddev: 0.000004821636759946174",
            "extra": "mean: 17.872787924217242 usec\nrounds: 11991"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 14715.694143786774,
            "unit": "iter/sec",
            "range": "stddev: 0.000006266172958407114",
            "extra": "mean: 67.95466052970514 usec\nrounds: 869"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2339.3683365364864,
            "unit": "iter/sec",
            "range": "stddev: 0.00003447349551505917",
            "extra": "mean: 427.46581817916444 usec\nrounds: 275"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "distinct": true,
          "id": "b34e1d3a8548ad61d289ccfd214dca1afb825792",
          "message": "bump: version 0.6.1 → 0.7.0",
          "timestamp": "2026-03-03T01:27:23Z",
          "tree_id": "ae710064456900b164f8e955ce29140683edb0a4",
          "url": "https://github.com/loonghao/transx/commit/b34e1d3a8548ad61d289ccfd214dca1afb825792"
        },
        "date": 1772501292727,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2669.3466520289658,
            "unit": "iter/sec",
            "range": "stddev: 0.0003384478932422727",
            "extra": "mean: 374.6235054333995 usec\nrounds: 736"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1608738.8266670255,
            "unit": "iter/sec",
            "range": "stddev: 1.1766540867199913e-7",
            "extra": "mean: 621.6049388649328 nsec\nrounds: 1782"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 547687.63221964,
            "unit": "iter/sec",
            "range": "stddev: 0.000003483250408628795",
            "extra": "mean: 1.8258582833927655 usec\nrounds: 17302"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 482165.8504103398,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034473965068939853",
            "extra": "mean: 2.073975166737681 usec\nrounds: 17637"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1181197.9869506117,
            "unit": "iter/sec",
            "range": "stddev: 7.562342663254242e-7",
            "extra": "mean: 846.5981241481848 nsec\nrounds: 3307"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1637147.871141072,
            "unit": "iter/sec",
            "range": "stddev: 3.2910245813538067e-7",
            "extra": "mean: 610.8183736042196 nsec\nrounds: 18940"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 23173.857387248125,
            "unit": "iter/sec",
            "range": "stddev: 0.000011540550136575913",
            "extra": "mean: 43.15207361853663 usec\nrounds: 8150"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5408.466246081785,
            "unit": "iter/sec",
            "range": "stddev: 0.000043113733477106816",
            "extra": "mean: 184.89530201366412 usec\nrounds: 3576"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1608701.6449467072,
            "unit": "iter/sec",
            "range": "stddev: 4.216361725286765e-7",
            "extra": "mean: 621.6193059422948 nsec\nrounds: 21009"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 13167.309396563944,
            "unit": "iter/sec",
            "range": "stddev: 0.000025187422005283045",
            "extra": "mean: 75.94565980662334 usec\nrounds: 1993"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1499.8650002104725,
            "unit": "iter/sec",
            "range": "stddev: 0.0001118535766520645",
            "extra": "mean: 666.7266719735925 usec\nrounds: 1256"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1991078.0213217302,
            "unit": "iter/sec",
            "range": "stddev: 2.0683983021834618e-7",
            "extra": "mean: 502.2404894701545 nsec\nrounds: 151516"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 225707.73757698893,
            "unit": "iter/sec",
            "range": "stddev: 0.000008589944522794447",
            "extra": "mean: 4.430508279136421 usec\nrounds: 17392"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 51730.58338285392,
            "unit": "iter/sec",
            "range": "stddev: 0.000007070352502270276",
            "extra": "mean: 19.330924466849325 usec\nrounds: 10406"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 14525.862149369445,
            "unit": "iter/sec",
            "range": "stddev: 0.000006306980721736783",
            "extra": "mean: 68.84272958926636 usec\nrounds: 784"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2291.5448027061643,
            "unit": "iter/sec",
            "range": "stddev: 0.000040713061450807545",
            "extra": "mean: 436.3868421071522 usec\nrounds: 266"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hal.long@outlook.com",
            "name": "longhao",
            "username": "loonghao"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "35ecc9f8bbf591d9d84f0b3b5dd64ae23fce8577",
          "message": "fix: resolve remaining isort and ruff lint errors",
          "timestamp": "2026-03-07T12:51:52+08:00",
          "tree_id": "9f44ff474bd609e02e2efd626b79c7f04028f99e",
          "url": "https://github.com/loonghao/transx/commit/35ecc9f8bbf591d9d84f0b3b5dd64ae23fce8577"
        },
        "date": 1772859182968,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2668.429408541375,
            "unit": "iter/sec",
            "range": "stddev: 0.00022841109455751972",
            "extra": "mean: 374.75227817498205 usec\nrounds: 834"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1518624.6413933202,
            "unit": "iter/sec",
            "range": "stddev: 4.153623603367821e-7",
            "extra": "mean: 658.490566228737 nsec\nrounds: 2067"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 535046.8329452648,
            "unit": "iter/sec",
            "range": "stddev: 0.00000358432523640237",
            "extra": "mean: 1.8689952699940566 usec\nrounds: 22832"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 487453.80798304034,
            "unit": "iter/sec",
            "range": "stddev: 0.000003254408616948892",
            "extra": "mean: 2.0514764345318075 usec\nrounds: 25907"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1179374.6554535609,
            "unit": "iter/sec",
            "range": "stddev: 8.523191931975348e-7",
            "extra": "mean: 847.9069779699671 nsec\nrounds: 3225"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1541491.5275730274,
            "unit": "iter/sec",
            "range": "stddev: 4.904962153969737e-7",
            "extra": "mean: 648.7223459310421 nsec\nrounds: 29155"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 24695.109796363147,
            "unit": "iter/sec",
            "range": "stddev: 0.000006800727430848154",
            "extra": "mean: 40.49384709142982 usec\nrounds: 6566"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5366.188628820847,
            "unit": "iter/sec",
            "range": "stddev: 0.00004472947449451348",
            "extra": "mean: 186.35200310126584 usec\nrounds: 3869"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1524603.0926674823,
            "unit": "iter/sec",
            "range": "stddev: 6.176409519430499e-7",
            "extra": "mean: 655.9084163015673 nsec\nrounds: 20877"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 13607.397327972802,
            "unit": "iter/sec",
            "range": "stddev: 0.00002417664043851492",
            "extra": "mean: 73.48943930256922 usec\nrounds: 1837"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1482.6098871880126,
            "unit": "iter/sec",
            "range": "stddev: 0.00007608918015148853",
            "extra": "mean: 674.4862614511811 usec\nrounds: 1201"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1970582.376901408,
            "unit": "iter/sec",
            "range": "stddev: 2.0889154816329148e-7",
            "extra": "mean: 507.4641952161529 nsec\nrounds: 142858"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 217815.7022246424,
            "unit": "iter/sec",
            "range": "stddev: 0.000008218598913271477",
            "extra": "mean: 4.59103723830093 usec\nrounds: 18019"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 53705.29077079687,
            "unit": "iter/sec",
            "range": "stddev: 0.000006020759091434372",
            "extra": "mean: 18.620139387528766 usec\nrounds: 9757"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 12381.208845274414,
            "unit": "iter/sec",
            "range": "stddev: 0.00005029673606707556",
            "extra": "mean: 80.76755771563244 usec\nrounds: 823"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2322.4878351105917,
            "unit": "iter/sec",
            "range": "stddev: 0.00004191450774486655",
            "extra": "mean: 430.5727611926899 usec\nrounds: 268"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "distinct": true,
          "id": "bcde35145ee83857bf73d6ba8c336294c3d8eb92",
          "message": "bump: version 0.7.0 → 0.8.0",
          "timestamp": "2026-03-07T04:52:13Z",
          "tree_id": "9ee97693543466938cef98964b718e3ea941944b",
          "url": "https://github.com/loonghao/transx/commit/bcde35145ee83857bf73d6ba8c336294c3d8eb92"
        },
        "date": 1772859185891,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2680.2054265743795,
            "unit": "iter/sec",
            "range": "stddev: 0.00024580695586173595",
            "extra": "mean: 373.1057291672298 usec\nrounds: 768"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1561724.8684223595,
            "unit": "iter/sec",
            "range": "stddev: 5.919276843759926e-7",
            "extra": "mean: 640.317651476083 nsec\nrounds: 1637"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 555796.1482420601,
            "unit": "iter/sec",
            "range": "stddev: 0.000003546923735339369",
            "extra": "mean: 1.7992208171339834 usec\nrounds: 20791"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 485222.3050756514,
            "unit": "iter/sec",
            "range": "stddev: 0.000003419757319994068",
            "extra": "mean: 2.060911028902699 usec\nrounds: 17826"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1246565.7934398695,
            "unit": "iter/sec",
            "range": "stddev: 3.962539429427569e-7",
            "extra": "mean: 802.2039472465574 nsec\nrounds: 3040"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1579109.3848561784,
            "unit": "iter/sec",
            "range": "stddev: 4.5654348197559197e-7",
            "extra": "mean: 633.2683534086384 nsec\nrounds: 17954"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 23527.22693927795,
            "unit": "iter/sec",
            "range": "stddev: 0.000013594318498072873",
            "extra": "mean: 42.50394670740104 usec\nrounds: 7956"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5504.271205048352,
            "unit": "iter/sec",
            "range": "stddev: 0.00003133429500591466",
            "extra": "mean: 181.67709452303694 usec\nrounds: 3724"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1574820.1224761647,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012776258322025361",
            "extra": "mean: 634.9931561883095 nsec\nrounds: 21187"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 13398.897983690473,
            "unit": "iter/sec",
            "range": "stddev: 0.000016945112646727098",
            "extra": "mean: 74.6330034915729 usec\nrounds: 1718"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1493.813647802153,
            "unit": "iter/sec",
            "range": "stddev: 0.00006660393971154054",
            "extra": "mean: 669.4275430347684 usec\nrounds: 1278"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2024165.7083526265,
            "unit": "iter/sec",
            "range": "stddev: 1.919783422674925e-7",
            "extra": "mean: 494.0306991036468 nsec\nrounds: 89286"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 205851.89023869738,
            "unit": "iter/sec",
            "range": "stddev: 0.000006025941049338425",
            "extra": "mean: 4.857861634597774 usec\nrounds: 18762"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 49815.152121555126,
            "unit": "iter/sec",
            "range": "stddev: 0.000005163452549057402",
            "extra": "mean: 20.07421351559615 usec\nrounds: 11793"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 13973.682039831045,
            "unit": "iter/sec",
            "range": "stddev: 0.000056508347753608545",
            "extra": "mean: 71.5630996289716 usec\nrounds: 813"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2316.4554773898467,
            "unit": "iter/sec",
            "range": "stddev: 0.000046150549537328644",
            "extra": "mean: 431.6940298489085 usec\nrounds: 268"
          }
        ]
      }
    ]
  }
}