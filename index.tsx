import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Text from '../../atoms/Typography'
import TextField from '@mui/material/TextField'
import { Stack } from '@mui/system'
import theme from '../../../themes/index'
import TextButton from '../../atoms/Button'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'
const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  width: '500px',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#262529',
  borderRadius: '12px',
  boxShadow: 24,
  p: 4,
}

export interface ModalBoxProps {
  open: boolean
  model2: boolean
  handleClick?: () => void
  inputValue?: string
  setinputValue?: React.Dispatch<React.SetStateAction<string>>
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setModel2: React.Dispatch<React.SetStateAction<boolean>>
  handleCreateClick?: () => void
}
const StyledTextButton = styled(TextButton)({
  background: theme.palette.primary.primaryAlphaPurple500,
  top: '32px',
  left: '110px',
  height: '60px',
  mb: '10px',
})
const ModalBox = ({
  open = false,
  handleClick,
  inputValue,
  setinputValue,
  setOpen,
  handleCreateClick,
  model2,
  setModel2,
}: ModalBoxProps) => {
  const navigate = useNavigate()
  const handleOpen: () => void = () => {
    if (handleClick) handleClick()
    setOpen(true)
  }
  const handleClose = () => {
    if (handleClick) handleClick()
    setOpen(false)
    setModel2(true)
  }

  const handleOnChnageHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (setinputValue) setinputValue(event.target.value)
  }
  return (
    <>
      {model2 ? (
        <Modal
          open={open}
          onClose={handleOpen}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={style}>
            {/* Header */}
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
              <Stack>
                <Text
                  variant="heading1"
                  textBody="Name your cash kick"
                  sx={{
                    color: theme.palette.primary.primaryTextHighEmp,
                  }}
                />
                <Text
                  variant="body2"
                  textBody="Add a name to identify your cash kick"
                  sx={{
                    color: theme.palette.primary.primaryTextLowEmp,
                    size: '18px',
                  }}
                />
              </Stack>
              <TextButton
                label="X"
                onClick={handleClose}
                sx={{ color: theme.palette.icon.main }}
              />
            </Stack>
            <Box sx={{ mt: '20px', mb: '10px', marginTop: '40px' }}>
              <Text
                textBody="Cash Kick name"
                variant="body1"
                sx={{
                  color:
                    inputValue === '' || inputValue === undefined
                      ? theme.palette.primary.primaryTextLowEmp
                      : theme.palette.primary.primaryAlphaPurple400,
                  marginBottom: '8px',
                }}
              />
              <TextField
                variant="outlined"
                sx={{
                  color: theme.palette.primary.primaryTextLowEmp,
                  backgroundColor: theme.palette.border.borderHighEmp,
                  width: '100%',
                  borderRadius: '12px',
                  input: {
                    color: theme.palette.primary.primaryTextMidEmp,
                  },
                  '& fieldset': { border: 'none' },
                  borderColor: theme.palette.primary.primaryAlphaPurple400,
                }}
                name="useName"
                onChange={handleOnChnageHandler}
                placeholder="Ex: marketing expenses"
                // textBody="Cash kick name"
                type="text"
                value={inputValue}
              />
            </Box>
            {/* Footer */}
            <Box sx={{ marginBottom: '20px' }}>
              <TextButton
                label="Cancel"
                onClick={handleClose}
                sx={{
                  bgcolor: theme.palette.background.backgroundElevation2,
                  style: 'tertiary',
                  color: theme.palette.primary.primaryTextMidEmp,
                  width: '133px',
                  height: '60px',
                  top: '32px',
                  left: '200px',
                  mb: '10px',
                  textTransform: 'none',
                }}
              ></TextButton>
              <StyledTextButton
                onClick={handleCreateClick}
                variant="contained"
                label="Create cash kick"
                style={{
                  opacity:
                    inputValue === '' || inputValue === undefined ? '0.5' : '1',
                }}
                sx={{
                  top: '32px',
                  left: '210px',
                  height: '60px',
                  mb: '10px',
                  textTransform: 'none',
                  bgcolor: theme.palette.primary.primaryAlphaPurple500,
                }}
              />
            </Box>
          </Box>
        </Modal>
      ) : (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={style} width="50%" height="auto">
            {/* Header */}
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
              <Stack>
                <Text
                  variant="heading1"
                  textBody="Cash kick launched successfully!"
                  sx={{
                    color: theme.palette.primary.primaryTextHighEmp,
                  }}
                />
                <Text
                  variant="body2"
                  textBody="We are reviewing your cash kick"
                  sx={{
                    color: theme.palette.primary.primaryTextLowEmp,
                    size: '18px',
                  }}
                />
              </Stack>
              <TextButton
                label="X"
                onClick={handleClose}
                sx={{ color: theme.palette.icon.main }}
              />
            </Stack>
            {/* Middle-content */}
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              sx={{ marginTop: '24px' }}
            >
              <img
                src={require('../../../../public/assests/icons/Animation_seeder.gif')}
                width="192px"
                height="172px"
                alt="reviewIcon"
              />
              <Box
                sx={{
                  marginBottom: '25px',
                  marginTop: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  variant="heading2"
                  textBody="Your cash kick is under review"
                  sx={{
                    color: theme.palette.primary.primaryTextHighEmp,
                    textAlign: 'center',
                  }}
                />
                <Text
                  variant="body1"
                  textBody="It will remain on pending state until we review it internally. This can take upto 5 mins to couple of hours. Once reviewed, the cash will be transferred to your account and you will be notified"
                  sx={{
                    color: theme.palette.primary.primaryTextLowEmp,
                    textAlign: 'center',
                  }}
                />
              </Box>
            </Box>
            {/* Footer */}
            <Stack direction={'row'} gap={2} sx={{ marginBottom: '25px' }}>
              <TextButton
                label="Close"
                onClick={() => navigate('/Dashboard')}
                sx={{
                  bgcolor: theme.palette.background.backgroundElevation2,
                  style: 'tertiary',
                  color: theme.palette.primary.primaryTextMidEmp,
                  width: '133px',
                  height: '60px',
                  top: '32px',
                  left: '150px',
                  mb: '10px',
                  textTransform: 'none',
                }}
              />
              <TextButton
                label="View cash kicks"
                variant="contained"
                onClick={() =>
                  navigate('/cashAcceleration', { state: 'cashkicks' })
                }
                sx={{
                  bgcolor: theme.palette.primary.primaryAlphaPurple500,
                  color: theme.palette.primary.primaryWhite,
                  top: '32px',
                  left: '160px',
                  height: '60px',
                  width: '198px',
                  mb: '10px',
                  textTransform: 'none',
                }}
              />
            </Stack>
          </Box>
        </Modal>
      )}
    </>
  )
}
export default ModalBox
