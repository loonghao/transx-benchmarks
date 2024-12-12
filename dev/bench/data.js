window.BENCHMARK_DATA = {
  "lastUpdate": 1734015562868,
  "repoUrl": "https://github.com/loonghao/transx",
  "entries": {
    "TransX Performance Benchmarks (Python 3.9)": [
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
          "id": "42b6ebc696e05d6208f1b1bc1b2f2149b9f1a9e1",
          "message": "chore(workflows): Update benchmark.yml and rename benchmark data file paths\n\nUpdate external-data-json-path and git add path in benchmark.yml. Rename benchmark-data-py3.8.json to benchmarks/benchmark-data-py3.8.json.\n\nSigned-off-by: longhao <hal.long@outlook.com>",
          "timestamp": "2024-12-12T22:58:25+08:00",
          "tree_id": "83b34ec3ec2ff2e268123f6fda6e31bf0c14d73b",
          "url": "https://github.com/loonghao/transx/commit/42b6ebc696e05d6208f1b1bc1b2f2149b9f1a9e1"
        },
        "date": 1734015558135,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2865.4354537554777,
            "unit": "iter/sec",
            "range": "stddev: 0.000062647674827507",
            "extra": "mean: 348.9870967742047 usec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 71244.44780304385,
            "unit": "iter/sec",
            "range": "stddev: 0.000005052443042077963",
            "extra": "mean: 14.036181496760454 usec\nrounds: 1697"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 66060.7232035007,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037831209080413427",
            "extra": "mean: 15.137587835959504 usec\nrounds: 25189"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 68423.6530428696,
            "unit": "iter/sec",
            "range": "stddev: 0.0000050312456436918835",
            "extra": "mean: 14.614829164024144 usec\nrounds: 29941"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 997795.0995287128,
            "unit": "iter/sec",
            "range": "stddev: 3.8759336263838074e-7",
            "extra": "mean: 1.002209772800376 usec\nrounds: 3213"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 73504.31141981114,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024298794934755297",
            "extra": "mean: 13.6046441451389 usec\nrounds: 27174"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 749.0253681909054,
            "unit": "iter/sec",
            "range": "stddev: 0.00021846843427679954",
            "extra": "mean: 1.3350682666666749 msec\nrounds: 750"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 2113.5003091180893,
            "unit": "iter/sec",
            "range": "stddev: 0.00011478352685974759",
            "extra": "mean: 473.14873609707445 usec\nrounds: 1978"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 62023.96606048452,
            "unit": "iter/sec",
            "range": "stddev: 0.000010751124207890044",
            "extra": "mean: 16.122800000000325 usec\nrounds: 31250"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 17988.370808454914,
            "unit": "iter/sec",
            "range": "stddev: 0.00000522612630095963",
            "extra": "mean: 55.59147132601797 usec\nrounds: 11561"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1620.937905870314,
            "unit": "iter/sec",
            "range": "stddev: 0.0001838023119050363",
            "extra": "mean: 616.9267782426742 usec\nrounds: 1434"
          }
        ]
      }
    ]
  }
}