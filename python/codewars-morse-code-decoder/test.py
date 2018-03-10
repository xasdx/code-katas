import unittest
from morse_decoder import MorseDecoder

class MorseDecoderTest(unittest.TestCase):
  def test_decodes_a_character(self):
    decoder = MorseDecoder()
    self.assertEqual(decoder.decode("...."), "H")

if __name__ == "__main__":
  unittest.main()
